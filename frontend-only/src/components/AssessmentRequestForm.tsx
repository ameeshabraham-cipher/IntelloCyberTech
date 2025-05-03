import { useState } from 'react';
import { Shield, Send } from 'lucide-react';

export default function AssessmentRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: '',
    industry: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for the frontend-only version
      const response = await fetch('https://formspree.io/f/mwpokerg', {
        method: 'POST',
        body: JSON.stringify({ ...formData, form_type: 'assessment' }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          size: '',
          industry: '',
          message: '',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card shadow-lg rounded-xl border border-border overflow-hidden">
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-6">Request Your Free Assessment</h3>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4">
              <Send className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold mb-2">Request Submitted!</h4>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in our security assessment. Our team will contact you shortly to schedule your free assessment.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="size" className="block text-sm font-medium mb-1">
                  Company Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-1">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select industry</option>
                  <option value="Banking & Finance">Banking & Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Government">Government</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Technology">Technology</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Please provide any specific security concerns or requirements for your assessment."
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>Request Assessment</>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
