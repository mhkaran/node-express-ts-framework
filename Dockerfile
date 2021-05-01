
FROM node:12.16.2-alpine
 
ARG SERVER_PATH=/usr/src
 
RUN mkdir -p ${SERVER_PATH}
WORKDIR =/usr/src/
COPY ./ .

WORKDIR ={SERVER_PATH}

CMD ["npm", "build"] 

# rm -rf /usr/src/src

# rm -rf /usr/src/unit-test


#RUN apt-get update && apt-get install -y


EXPOSE 8000 8000
# The docker entry point command
CMD ["npm", "start"]