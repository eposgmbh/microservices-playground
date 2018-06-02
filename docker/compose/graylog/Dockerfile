FROM graylog/graylog:2.4

COPY contentpack.json /usr/share/graylog/data/contentpacks

ENV GRAYLOG_CONTENT_PACKS_AUTO_LOAD contentpack.json
ENV GRAYLOG_CONTENT_PACKS_LOADER_ENABLED true
ENV GRAYLOG_CONTENT_PACKS_DIR data/contentpacks
