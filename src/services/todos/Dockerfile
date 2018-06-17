FROM microsoft/dotnet:2.1-sdk AS build-env

WORKDIR /build

COPY ./ToDos.sln ./
COPY ./ToDos.Model/ToDos.Model.csproj ./ToDos.Model/
COPY ./ToDos.Persistence/ToDos.Persistence.csproj ./ToDos.Persistence/
COPY ./ToDos.WebApi/ToDos.WebApi.csproj ./ToDos.WebApi/
RUN dotnet restore

COPY ./ ./
RUN dotnet publish --configuration Release --output dist

# ---------------------------------------

FROM microsoft/dotnet:2.1-aspnetcore-runtime

WORKDIR /svc
COPY --from=build-env /build/ToDos.WebApi/dist ./
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

EXPOSE 5000

ENTRYPOINT [ "dotnet", "ToDos.WebApi.dll" ]
