import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await addDoc(collection(db, 'messages'), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date()
      });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section style={{ padding: '80px 20px', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Contact Me</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#1a472a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p style={{ color: 'green', textAlign: 'center', marginTop: '15px' }}>Message sent successfully!</p>}
          {status === 'error' && <p style={{ color: 'red', textAlign: 'center', marginTop: '15px' }}>Error sending message. Try again.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;