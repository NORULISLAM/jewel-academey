import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-info fw-bold p-4 m-4'>Question 1: Difference between authorization and authentication?</h1>
            <p className='p-2'>
                Authentication

                if user is a hacker or bad intentions. Not a identification person.

                After identifying who is  the user make sure the person is really user.
                For example, ask the user to give them a Credential (password or something used for authentication), and if they match, log in.
                Authorization Authorization

                The server gives the user the appropriate permissions.
                For example, it's like a SQL grant statement.
                Do you just show it or allow permission.

            </p>
            <h1 className='text-info fw-bold p-4 m-4'>Question 2: Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className='p-2'>
                Firebase Cloud Messaging is a function that allows you to send and receive messages (push notifications) to applications for free.

                You can send and receive between different devices such as iOS and Android, and you can also send messages by segment.  You can also monitor the messages you send on the dashboard.——///////

                SAML (Security Assertion Markup Language) is an XML-based framework for authentication and authorization between two companies, a Service Provider and an Identity Provider.  The Service Provider trusts and agrees with the Identity Provider that authenticates the user.  In exchange, the Identity Provider generates an authentication assertion that indicates that the user has been authenticated.

                SAML is the standard single sign-on (SSO) format.  Credentials are exchanged through digitally signed XML documents.  A complex single sign-on (SSO) implementation that enables seamless authentication primarily between businesses .

                With SAML, you don't have to worry about credential types or password resets.it’s totally save provider.


            </p>

            <h1 className='text-info fw-bold p-4 m-4'>Question 3:What other services does firebase provide other than authentication?</h1>
            <p className='p-2'>
                World many famous firebase similar authentication services provider below:
                A:  Parse – Open Source Backend Platform;
                B:  Back4app – Parse Hosting Platform;
                C: Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                D:  Backendless – Mobile Backend and API Services Platform;
                E: Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
            </p>
        </div>
    );
};

export default Blog;