import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}            
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuthenticated ?(
                <WrappedComponent {...props}/>
                ) :(
                    <p>Please log on to see this info!!!</p>
                ) }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Here are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Here are the details"/>, document.getElementById('app'));