import React from 'react';

function App() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
            background: '#f0f0f0',
        },
        header: {
            background: '#4CAF50',
            color: 'white',
            width: '100%',
            padding: '10px',
            textAlign: 'center',
        },
        main: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '600px',
        },
        footer: {
            marginTop: 'auto',
            padding: '10px',
            textAlign: 'center',
            background: '#ddd',
            width: '100%',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>My Simple App</h1>
            </div>
            <div style={styles.main}>
                <h2>Welcome to My App!</h2>
                <p>This is a minimal React application layout.</p>
                <p>Feel free to explore and modify the code!</p>
            </div>
            <div style={styles.footer}>
                <p>&copy; 2024 My App</p>
            </div>
        </div>
    );
}

export default App;
