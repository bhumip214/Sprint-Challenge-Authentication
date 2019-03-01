1. What is the purpose of using _sessions_?
   => Sessions are a simple way to store data for individual users against a unique session ID. This can be used to persist authentication information between page requests. Session IDs are normally sent to the browser via session cookies and the ID is used to retrieve existing session data.

2. What does bcrypt do to help us store passwords in a secure manner.
   => Cryptographic Hashing of the password.

3. What does bcrypt do to slow down attackers?
   => By adding time to hashing algorithm to create Key Derivation function.

4. What are the three parts of the JSON Web Token?
   => Header, Payload and Signature
