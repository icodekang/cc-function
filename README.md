# C/C++函数搜索引擎

> 该项目主要是用来搜集些经典的C/C++实现或者介绍,是一个非盈利的项目,项目会生成一个web网站方便使用着查询。

## docker部署

轻松通过docker部署cc-function网站
```
docker push icodekang/cc-function:latest
docker run --name cc-function --rm -d -p 9666:80 icodekang/cc-function:latest
```

在浏览器中访问以下URL
```
http://localhost:9666
```

## docker-compose部署

下载docker镜像
```
docker push icodekang/cc-function:latest
```

docker-compose配置如下
```
services: 
  linux-command:
    restart: always
    image: cc-function:latest
    container_name: cc-function
    ports:
      - 9666:80
```

通过以下命令创建镜像
```
docker-compose up -d
```

在浏览器中访问以下URL
```
http://localhost:9666
```