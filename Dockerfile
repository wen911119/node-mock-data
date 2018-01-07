# 基础镜像
FROM registry.docker-cn.com/library/node:alpine
# 维护者信息
LABEL maintainer="wen911119@gmail.com"

ADD index.js /root/index.js
ADD package.json /root/package.json

WORKDIR /root

RUN npm install --registry=https://registry.npm.taobao.org && rm -rf /root/.npm*

ADD start.sh /root

CMD ["./start.sh"]
