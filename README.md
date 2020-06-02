# Salesforce Change Data Capture (CDC) ingestion POC

Ingests all changed data within a Salesforce org and outputs it in JSON on console

Turn on Change Data Capture in your Salesforce org settings for any objects you want.
Git clone this, npm install, then create a .env file with contents:
SFUSERNAME=username@domain.com
SFPASSWORD=password123

If an access token is required for API access, concatenate that to the password

Then npm run dev and make some changes in your Salesforce objects

N.B. this is just a POC, single threaded and brittle