document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
            };

            // Initialize Supabase client
            const supabaseUrl = 'YOUR_SUPABASE_URL';
            const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
            const supabase = supabase.createClient(supabaseUrl, supabaseKey);

            // Insert data into Supabase
            const { data, error } = await supabase
                .from('contacts')
                .insert([formData]);

            if (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form. Please try again.');
            } else {
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }
});