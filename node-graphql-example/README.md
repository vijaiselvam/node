# node.js.

# run app -> node server.js

open url -> http://localhost:4000/graphql
and enter the queries given below

# 1.

{
    message
}

# run app -> node server2.js

# 1. 

query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}

# Query Variables

{
  "courseID": 1
}

# 2. 

query getCoursesForTopic($courseTopic: String!) {
  courses(topic: $courseTopic) {
    title
    author
    description
    topic
    url
  }
}

# Query Variables

{
  "courseTopic": "Node.js"
}

# 3. 

query getCoursesWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1){
    ...courseFields
  }
  course2: course(id: $courseID2) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

# Query Variables
{
  "courseID1": 1,
  "courseID2": 2
}

# 4. 
mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields 
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

# Query Variables

{
  "id": 1,
  "topic": "java"
}
