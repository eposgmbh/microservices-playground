#MailService

##Usage
### via Curl
    curl -i http://localhost:9200/send -X POST -H "Content-Type: application/json" -d '{"sender": "microe@xample.de","receiver": "alex.ab888@gmail.com","subject": "Dies ist eine Testmai2l","body": "hallo"}'
