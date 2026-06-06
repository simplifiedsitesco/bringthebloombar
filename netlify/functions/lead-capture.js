exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }
  try {
    console.log('Lead capture triggered:', new Date().toISOString());
    const data = JSON.parse(event.body);
    const name = data.name || 'Not provided';
    const eventDate = data.eventDate || 'Not provided';
    const city = data.city || 'Not provided';
    const experience = data.experience || 'Not provided';
    const source = data.source || 'book.html Step 2';
    console.log('STEP 2 LEAD CAPTURE:', JSON.stringify({ name, eventDate, city, experience, source }));
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.log('LEAD CAPTURE ERROR:', error.message);
    return { statusCode: 200, body: JSON.stringify({ success: false }) };
  }
};
