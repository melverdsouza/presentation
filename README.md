# Important Terms


1. 10 popular commands

a. grep - used to find patterns or characters in the file grep "React" index.js -i removes case sensitivity
b. ls - lists files and directories in the current path
c. pwd - is for printing the current working directory.
d. cat - concatenates files, lets us display contents of multiple files cat test test1 in the terminal
e.echo - used to display a line thats passed as an argument. 
f. touch - used to create a file without any content
g. mkdir - is used to make a new empty directory in the current active path
h. rm - is used to remove files -rf is added to remove a directory
i. rmdir - is used to remvoe the directory
j. tail - reads a file and outputs the last part of it
k. find - used to quickly lookup files or directory 

2. 10 popular network commands
a. ipconfig - gives the info on ip address, routers ipaddress, dns server ip address, etc
b.ping - sends a signal to another device to see if its active this is to check if the router is down
c. tracert - lets you see step by step route a packet takes to the destination like google.com
d. nslookup - fetch dns records for domain name or ip address 
e. arp - protocol for view and manage cache
f. netstat - is used to get the network statistics,
g. route - used to manage the routing table
h. pathping - provides info about network latency and network loss at intermediate hops or routes
i telnet - allows user to remotely access another computer such as a server or computer
j. ftp - is file transfer protocol

3. 10 popular OS commands
a. cipher - used to encrypt or decrypt data on ntfs drives, also data is securly deleted by overwriting it
b. fc - is file compare where files are compared to see if there are any content or binary code differences
c. tasklist - gives a list of processes running on the system from the command prompt
d. taskkill - is like the traditional way of killing processes using task manager
e. sfc - is an automatic scan and repair tool, if corrupt files are found, theyll be replaced using cached copies kept by windows
f. driverquery - improperly configured or missing drivers cause trouble so access to a list of whats on pc is given
g. mkdir - is used to make a new empty directory in the current active path
h. rm - is used to remove files -rf is added to remove a directory
i. rmdir - is used to remvoe the directory
j. tail - reads a file and outputs the last part of it
k. find - used to quickly lookup files or directory

4. 10 popular git commands
a. git config - command sets the author name and email address respectively to be used with commits
b. git init - is used to start a new repo
c. git clone - is used to obtain a repo from an existing URL
d. git add - adds a file to the staging area
e. git commit - is used to record or take a snapshot of the file permanently in the version history
f. git diff - shows the file differences which are not yet staged git diff -staged shows the difference bet file in staging area and latest version
g. git reset [file] - unstages the file but it preserves the file contents git reset [commit] undoes all commits after specified commit and preserves the changes locally
h. git status - lists all the files that have not been commited
i. git rm [file] - deletes the file from working directory and stages the deletion
j. git log - command is used to list the version history for the current branch
k. git show [commit] - shows the metadata and content changes of the specified commit
l. git tag[commitID] - used to give tags to the specified commit
m. git branch - this command lists all the local branches in the current rep git branch -d deletes the feature branch
n. git checkout [branch name] - used to switch from one branch to another
o. git merge [branch name] - merges the specified branch's history into the current branch
p. git remote add [variable name] [remote server link]- used to connect local repo to the remote server
q. git push [variable name] master - sends the committed changes of master branch to remote repo
r. git pull - fetches and merges changes on the remote server to working directory
s. git stash save - temporarily sores all modified tracked files.

5. Database
database is an organised collection of data stored electronically in the form of a table, it is usually controlled by a DBMS. The data and DBMS along with the application are associated with them.

6. SQL Database
it is the standard language for inserting, seraching, updating and deleting records. It is a relational DBMS 

7. NoSQL Database
is an alternative to traditional relational database, this is used for working with large sets of distributed data. implements a simple model that pairs unique key with associated values. wide columns stores data tables as columns instead of rows, this can query large data volumes faster

8. 10 popular databases
a. oracle
b.mysql
c. microsoft sql server
d. postgreSQL
e. mongodb
f. db2
g.microsoft access
h.cassandra
i.redis
j.elasticsearch

9. ACID
is a set of properties that guarantee database transactions being processed reliably, it mainly concerns how database recovers from any failure that occurs while processing a transaction. Atomicity is guarantee that either all the transactions succeed or none of it does. Consistency is guarantee that all data will be consistent. Isolation is no transaction will be affected by any other transaction and Durability is when one transaction is committed it will remain in the system even if theres a crash following the transaction

10. Aggregation
is when information is gathered and summarized for statistical analysis. it is to get more info on a specific variable 

11. Joins
join combines columns from one or more tables in relational database.

12. CAP theorem
Consistency states that all nodes see the same data at the same time. a read operation will return the value of the most recent write operation causing all nodes to return the same data. in this model any inconsistency the entire transaction gets rolled back if there is an error. 
Availability states that every request gets a response on success/failure. The system is operational 100% of the time.the client gets a response regardless of the state of a node in the system.
Partial tolerance states that the system continues to run, despite the number of messages being delayed by the network between nodes. it can sustain any amount of network failure that doesnt result in a failure of the entire network.
the rule of CAP theorem is that it can have only 2 of the 3 concepts.

13. Normalization
is the process of structuring a non structured data into a relational database in accordance with a series of mormal forms in order to reduce data redundancyand improve data integrity

14. Database sharding
when a database is separated into smaller, faster and more easily managed parts.

15. Network layers
there are 7 layers in the OSI model which are:
    7. application: supports application and end user processes
    6. Presentation: transforms the data into the form that the application layer can accept
    5. Session: manages and terminates the connection between applications
    4. Transport: provides transparent transfer of data between end systems
    3. Network: provides switching and routing technologies, for transmitting data from node to node.
    2. Data link: manages and handles errors in the physical layer, flow contol and frame synchronization
    1. Physical: conveys bit stream through the network at the electrical and mechanical level.

16. Request response protocol
HTTP protocol is a request/response protocol where the client sends a request for some resource and the server responds by sending the resource or a status code 

17. Web API
API is a kind of an interface which has a set of functions that allow programmers to access specific features or data of an application, operation system or other services.

18. REST
is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. in this architecture client sends requests to retrieve or modify resources, and servers send responses to these requests. 

19. HTTP Status codes to handle
200 - means that the request was processed successfully
400 - is sent when data is not syntactically correct
422 - is when input data is invalid that is data is syntactically correct but sematically incorrect
401 - is when the user is not authenticated
403 - is when the user is not authorized
404 - is when no record is found
500 - is when an error is encountered

20.  HTML 
is a markup language for creating a wepage. is usually viewed in a web browser, it can include links, pictures, and even sound and video

21. Box model 
all elements in HTML are considered to be boxes.  box model is a box that wraps around every HTML element. this is used to create the design and layout of web pages. it can be fustomized

22. Margin
is a property used to create space around elements outside of any defined borders, for setting margins for each side top, right , bottom and left can be used

23. Padding
is the innermost portion of the box model for creating space around an elements content, it does not accept negative values

24. CSS selectors
are used to select the content to style, these slectors can be of different types like elements, id, class, universal and group

25. CSS specificity
if there are two or more conflicting css rules the browser follows some rules to determine which one is most specific and therefore wins out. SPecificity of an element is 1, for an ID it is 100 and for id it is 1000

26. flexbox 
is used to distribute space between or around the items, the properties can also let us mention the direction the container wants to stack the flex items

27. grid
the css grid layout offers a grid based layout system, with rows and columns making it easier to design web pages without having to use floats and positioning

28. git 
git helps in managing projects or set of files as they change over time as it stores information in a data structure called a repo

29. HTTP
it is the underlying protocol used by www, it defines how messages are formatted and transmitted and what actions web servers and browsers should take in response to various commands.

30. TCP
transmission control protocol defines how to establish and maintain network conversation through which application programs can exchange data. it works with the Internet protocol which defines how computers send packets of data to each other

31. UDP
it is a communication protocol used across the internet for time sensitive transmissions such as video playback or DNS lookups. it speeds communications by not requiring allowing data to be transferred before the receivingparty agrees to the communication, it allows the protocol to  operate quickly and also creates an opening for exploitation

32. Web server
a web server is a computer that stores web server software and a websites componentfiles, it is connected to the internet and supports physical data interchange with other devices connected to the web
on the software sied a wev server includes several parts that control how web users access hosted files at minimum an HTTP server is a piece of software that understands URLs and HTTP, it can be accessed through the domain names of websites it stores and delivers their content to the end users device.

33. Static server
contains web pages with fixed content. the page is coded in html and displays the same info to every visitor. the content does not change unless it is manually updated vy the webmaster.

34. Application server
is a software framework that provides both facilities to create web application and a server environment to run them

35. DNS server
is a server that contains all public IP addresses and the hostnames they resolve those names to IP address as requested.

36. Database server
is the term used to refer to the backend systems of a database application using client/server architecture. the backend is usually called a database serverwhich performs a specific task

37. Standalone application
are traditional softwares that are installed on each client system, web based applications are installed only once whereas desktop applications are installed separately on each computer

38. MVC
is model view controller, it is an application design model, model represents the shape of the data and business logic,maintains the data of the application
view is a user interface, it displays data using model to the user and enables to modify the data
controller handles the user request, it renders the appropriate URL request, the request is handled by a controller
 
 39. Operating system
 is a system software that manages hardware, software resources, and provides common services for computer programs. the OS manages a computers hardware resource, including input devices such as keyboard and mouse

 40. Kernal
 it is the central part of an operating system, it manages the operations of the computer and the hardware most notably memory and CPU time, it handles the rest of startup as well as input/ output requests from software, it handles memory and peripherals like keyboards, monitors, printers and speaker

 41. Process
is the instance a computer program that is being executed by one or many threads(it is a flow of execution through the process code, which keeps a track of instructions to execute next) executing instructions concurrently

42. Thread
is a single sequence stream within a process, they allow multiple executions of streams 

43. SOLID
are design principles when doing OOP
a. Single Responsibility Principle - every module should have a responsibility over only a single part of the functionality
b. Open/closed principle - software entities should be open for extensions but closed for modifications
c. Liskov Substitution Principle - functions use pointers to base classes must be able to use objects of derived classes without knowing it
d. Interface Segregation Principle - client should not be forced to depend on methods it does not use.
e. Dependency inversion principle - high level modules should not depend on low level modules they should depend on abstractions, abstractions should not depend on details, details should depend on abstractions.
44. Apache web server
is an open source and free web server software, it allows website owners to serve content on the web 

45. Nginx web server
is an open source HTTP web server and reserve proxy server it is the third most popular web server after apache and microsofts IIS, it powers pinterest, netflix, hulu

46. Messaging Queue
it allows applications to communicate by sendign messages to each other. it provides a temporary message storage when the destination program is busy or not connected. it generally does not require any immediate response from the receiver.

47. Enterprise Message Bus
it is a middleware tool used to distribute work among connected components in an application. it is a uniform means of moving work, offering applications the ability to connect to the bus

48. Rabbitmq
is a general purpose messaging solution, often used to allow web server to respond to requests quickly instead of being forced to perform resource heavy procedures while the user waits for the result

50. Kafta
is a distributed streaming platform that is used to publish and subscribes to stream of records, it gets used for fault tolerance storage, it is used to stream data into data lakes

51. Apache Zookeeper
it is used for maintaining centralized configuration information, naming, providing distributed synchronization and providing group services in a simple interface so that we dont have to write it from scratch.

52. Microservices architecture
is only an architectural style that structures an application as a collection of small autonomous services, modeled around a business domain, each service is self contained and implements a single business capability

53. Redis and why is it used?
it is a open sourced in-memory data structure store used as a database, cache and message broker, it supports strings, hashes, etc it is used to resolve very complex programming problems with simple commands executed within the data store reducing coding effort increasing thoughput and reducing latency

54. SOLR and why is it used
is an open source enterprise search platform , it is popular seach platform for web sites because it can index and search multiple sites and return recommendations related to content based on the search querys taxonomy

55. Elasticsearch and why is it used
it is a highly scalable open source full text search and analytics engine it allows to store seach and analyze big volumes of data quickly and near real time. it is used as an underlyingtechnology that powers applications that have complex serach features and requirements

56. Celery and why is it used
celery is a task queue implementation for python web applications used to asynchonously execute work outside the HTTP request-response cycle,  its system can consist of multiple workers and brokers giving way to high availability and horizontal scaling

57. Node js
is a platform built on chromes javascript runtime for easily building fast and scalable network applications, it uses an event driven non blocking input and output model that make s it lightweight and efficient perfect for data intensive real time applications that run across distributed devices.

58. Mongodb 
is an open source DBMS that supports various forms of data, instead of using tables and rows as in relational databases  the mongodb architecture is made up of collections and documents

59. Progressive web app
is a web app that uses modern web capabilities to deliver an app like experince to users. there are certain requirements like they are deployed to servers, accessible through URLs and indexed by search engines,they also work for every user regardless of browser choice 

60. Session based architecture
is where a user state is stored on the servers memory, it creates and stores the session data in the server memory when the user logs in and then stores the session id in a cookie on the user browser

61. Token based authentication
is a securtiy technique that authenticates the users who attempt to log in to a server or network using a security token provided by the server the service validates the security token and processes the user request

62. Authorization 
it is the process where the database manager gets the info about the authenticated user, part of the info is determining which database operations the user can perform and which data objects a user can access.

63. Docker
it is a container engine which uses the Linux kernel features like namespaces and control groups to create containers on top of an operating system and automates application deployment on the container. it makes it easier to create, deploy and run applications with all of the parts needed 

64. IaaS
is a basic layer in cloud computing that provides virtualized computing resources over the internet

65. AWS
it is a secure cloud service platform offering compute power, database storage, content delivery and other functionality to help businesses to scale and grow.

66. PaaS
it is a cloud computing model in which a third party provider delivers hardware and software tools needed for application development the components could be operating systems, servers, databases, middleware, networking equipment and storage services.

67. Heroku is PaaS is is used to deploy, manage, and scale modern apps it is flexible and easy to use offering developers the simplest path to getting their apps to the market.

68. Hoisting
 it is a default behaviour in Javascript of moving all the declarations at the top of the scope before code execution, it gives an advantage that no matter where functions and variables are declared they are moved to the top of their scope regardless of whether their scope is global or local

 69. Pass by refernce and pass by value
 pass by value means that a value is passed on whereas pass by refernce passes the address where the value is defined

 70. Closure
 it is an inner function that has access to the outer functions variables scope chain, to use a closure a function is defined inside another function and exposed to it

 71. Prototypal inheritence
 it refers to an objects ability to access methods and other properties from another object

 72. Mutable methods in JS
 in javascript only objects and arrays are mutuable not primitive values, it means a variable name can point to a new value but the previous vlaue is still held in memory.

 73. Immutable methods in js
it is an object whose state cannot be modified after it is created, like numbers and strings

74. React
it is an open source js library which is used for building user interfaces specifically for single page applications, its used for handling view layer for web and mobile apps

75. why use readct
it allows developers to create large web application which can change data, without reloading the page, its purpose is to be fast, scalable and simple

76. Redux
it is a predictable state container for js applications it helps to write applications that behave consistently and run in different environments and are easy to test

77. Why use redux
it is easy to debug an application by logging actions and state, it is easy to understand coding errors, network errors and other forms of bugs that might come up during production

78. State
in the heart of every react component is its state an object that determines how that component renders and behaves it allows us to create components that are dynamic and interactive.

79. Props
they are components that can be customized when they are created, with different parameters, these creation parameters are called props, they are single values or objects containing a set of values that are passed to react componenets on creation using a naming convention similar to HTML tag attributes
