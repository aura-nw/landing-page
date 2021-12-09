#!/bin/sh
set -xe

#Login to registry
docker login ghcr.io -u $REGISTRY_USERNAME -p $REGISTRY_PASSWORD
if [ ${GITHUB_REF_NAME} = "main" ]
then
    echo 'This is main branch'
    cp ./src/robots/robots-aura.txt ./src/robots.txt
    cp ./src/robots/sitemap-aura.xml ./src/sitemap.xml
fi
#Build and push image
docker build -t ${CONTAINER_RELEASE_IMAGE} -f Dockerfile .
docker push ${CONTAINER_RELEASE_IMAGE}
