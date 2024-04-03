import { useState } from 'react';
import { Container, Col, Form, Button, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState('');
  const [recommendation, setRecommendation] = useState(''); // State to hold the recommendation

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    const response = await fetch('/api/openai/tech-stack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
      },
      body: JSON.stringify({ projectDescription: searchInput }),
    });

    if (response.ok) {
      const { recommendation } = await response.json();
      setRecommendation(recommendation); // Store the recommendation in state
    } else {
      console.error('Failed to get recommendation');
      setRecommendation('Failed to get recommendation. Please try again.');
    }

    setSearchInput(''); // Clear the input field
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>AI-Assisted Tech Stack Recommendations</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Describe your project'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Get Recommendations
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      {/* Container to display the recommendation */}
      <Container>
        <h2 className='pt-5'>Recommendation:</h2>
        <ReactMarkdown className='recommendation'>{recommendation || 'Enter your project details to get a recommendation.'}</ReactMarkdown>
      </Container>
    </>
  );
};

export default SearchBooks;