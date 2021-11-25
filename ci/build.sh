#!/bin/sh
set -xe

#Login to registry
docker login -u gitlab-ci-token -p $CI_JOB_TOKEN $CI_REGISTRY
if [ ${CI_COMMIT_REF_NAME} = "develop" ]
then
    echo 'This is develop branch'
    pwd
    ls -al
    cp ./src/robots/robots-akachains.txt ./src/robots.txt
    cp ./src/robots/sitemap-akachains.txt ./src/sitemap.uml
elif [ ${CI_COMMIT_REF_NAME} = "uat" ]
then
    echo 'This is uat branch'
    cp ./src/robots/robots-aura.txt ./src/robots.txt
    cp ./src/robots/sitemap-aura.txt ./src/sitemap.uml
fi
#Build and push image
docker build -t ${CONTAINER_RELEASE_IMAGE} -f Dockerfile .
docker push ${CONTAINER_RELEASE_IMAGE}
