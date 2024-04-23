package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

func main() {
	// MinIO endpoint and credentials
	endpoint := "localhost:9000"
	accessKeyID := "minio"
	secretAccessKey := "password"
	useSSL := false

	// Initialize MinIO client
	minioClient, err := minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: useSSL,
	})
	if err != nil {
		log.Fatalln(err)
	}

	// Create a new bucket if it doesn't exist
	bucketName := "my-bucket"
	// err = minioClient.MakeBucket(context.Background(), bucketName, minio.MakeBucketOptions{})
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// File upload handler
	http.HandleFunc("/upload", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}

		// Get the file from the request
		file, header, err := r.FormFile("file")
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		defer file.Close()

		// Upload the file to MinIO
		objectName := header.Filename
		_, err = minioClient.PutObject(context.Background(), bucketName, objectName, file, header.Size, minio.PutObjectOptions{})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "File %s uploaded successfully", objectName)
	})

	http.HandleFunc("/objects", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}

		objectinfo := minioClient.ListObjects(context.Background(), bucketName, minio.ListObjectsOptions{
			Recursive: true,
		})
		reqParams := make(url.Values)
		objectURLs := make([]*url.URL, 0)

		for object := range objectinfo {
			preSignedUrl, err := minioClient.PresignedGetObject(context.Background(), bucketName, object.Key, time.Second*24*60*60, reqParams)

			if err != nil {
				fmt.Println(err)
				return
			}
			fmt.Println("Successfully generated presigned URL", preSignedUrl)
			objectURLs = append(objectURLs, preSignedUrl)

		}
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, "[%s]", objectURLs)
	})

	http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusAccepted)

		fmt.Printf("Route Working file")
	})

	log.Println("Server running on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
