# Durbin-assignment
Develop a simple backend api through which an user can perform the following operations
Upload single / multiple documents (PDF/DOCX)
Parse the resume fields as mentioned below Name, Phone No, Email ID, Address Work Experience Education Certifications Skills For the single document upload the response should be 
{     "response": 
{     "name": " Aaron Engenito",   
"phone": "+1 607 422 5918",    
"address": " Castle Creek NY", 
"email": "ajengenito@gmail.com", 
"experience": [  
{     
"company": "Dedicated logistics partners - Binghamton, NY",    
"position": "Delivery Driver",    
"timeline": "November 2019 to Present"       },  
{       "company": "Americas Business Express - Johnson City, NY",    
"position": "Driver/Warehouse",  
"timeline": "September 2018 to January 2019"       }, 
{       "company": "Brenda Uni",     
"position": "Teachers Aide and Family Life Specialist",  
"timeline": "December 2017 to June 2018"       }, 
{       "company": "A.L. George - Binghamton, NY",   
"position": "Driver Helper route delivery",     
"timeline": "April 2017 to November 2017"       } 
],     "total_experience": 2154, 
"total_percentile_score": 100.0  
} }
