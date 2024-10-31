
```mermaid 
sequenceDiagram
    actor User
    participant Frontend Application
    participant Proxy API
    participant Syllabus API

    User->>Frontend: Request syllabus for Course 
    Frontend->>Proxy: GET /syllabus/course
    Proxy->>Syllabus: GET /course
    Syllabus-->>Proxy: Course  syllabus data
    Proxy-->>Frontend: Course syllabus data
    Frontend->>User: Display Course data
