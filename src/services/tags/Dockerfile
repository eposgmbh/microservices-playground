FROM gradle:4.8-jdk8 AS build-env

WORKDIR /build
COPY ./ ./

WORKDIR /build/tags.rest
USER root
RUN gradle publish

# ---------------------------------------

FROM openjdk:8

WORKDIR /svc
COPY --from=build-env /build/tags.rest/build/dist ./
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "tags.rest-0.1.0.jar" ]
