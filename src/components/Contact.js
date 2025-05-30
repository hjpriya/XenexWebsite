import React, { useState } from "react";

export default function Contact() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); 
    
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYzv83lOcjdBma_q3f7h9VE_qufO0UJ6vpVwDB8eQxYlfffixuoUMsfLln8ga1FrZgHQ/exec";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        if (!formData.name || !formData.email || !formData.message || !formData.contact) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all required fields (Name, Email, Contact No., and Message).' });
            setIsSubmitting(false);
            return;
        }

        if (!SCRIPT_URL) {
            console.error("Google Apps Script URL is not configured. Please update SCRIPT_URL in Contact.js.");
            setSubmitStatus({ type: 'error', message: 'Form submission endpoint is not configured. Please contact support.' });
            setIsSubmitting(false);
            return;
        }

        const dataToSubmit = new FormData();
        for (const key in formData) {
            dataToSubmit.append(key, formData[key]);
        }

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: dataToSubmit,
            });

            const responseText = await response.text();
            console.log("Raw response text from Apps Script:", responseText);

            let result;
            try {
                result = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Failed to parse JSON response from Apps Script:", parseError);
                throw new Error(`Received a non-JSON response from the server (HTTP ${response.status}). Check server logs and ensure the script returns JSON.`);
            }

            console.log("Parsed Apps Script Response:", result);

            if (response.ok && result.status === "success") {
                setSubmitStatus({ type: 'success', message: result.message || "Message sent successfully! We'll get back to you soon." });
                setFormData({ name: "", email: "", contact: "", message: "" });
            } else {
                let detailedErrorMessage = "Submission failed.";
                if (!response.ok) {
                    detailedErrorMessage += ` Server responded with an error (HTTP ${response.status}: ${response.statusText || 'Unknown Status'}).`;
                } else {
                    detailedErrorMessage += ` The script responded OK, but the operation was not successful.`;
                    if (result.message) {
                        detailedErrorMessage += ` Script message: ${result.message}.`;
                    } else if (result.status) {
                        detailedErrorMessage += ` Script status: ${result.status}.`;
                    } else {
                        detailedErrorMessage += ` No specific error message or status provided by the script. Raw response: ${responseText.substring(0, 200)}...`; // Log a snippet
                    }
                }
                throw new Error(detailedErrorMessage);
            }

        } catch (error) {
            console.error("Error submitting contactform:", error);
            setSubmitStatus({ type: 'error', message: error.message || "An unknown error occurred during submission. Please check the console." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
                Have a question or want to work together? Fill out the form below.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-box">
                    <label htmlFor="name" className="contact-form-label" >Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="contact-form-input" />
                </div>
                <div className="contact-form-box">
                    <label htmlFor="email" className="contact-form-label" >Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="contact-form-input" />
                </div>
                <div className="contact-form-box">
                    <label htmlFor="contact" className="contact-form-label" >Contact No:</label>
                    <input type="tel" max="12" id="contact" name="contact" value={formData.contact} required onChange={handleChange} className="contact-form-input" />
                </div>
                <div className="contact-form-box">
                    <label htmlFor="message" className="contact-form-label" >Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="3" className="contact-form-input" />
                </div>
               <button type="submit" disabled={isSubmitting} style={{ width: "100%", padding: "0.85rem", backgroundColor: isSubmitting ? "#797873" : "#000", color: "#B5A642", border: "none", borderRadius: "4px", cursor: isSubmitting ? "not-allowed" : "pointer", fontSize: "1rem", fontWeight: "bold" }}>
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
            </form>
            {submitStatus && submitStatus.type === "success" && (
                <p className="status-message status-message-success">{submitStatus.message}</p>
            )}
            {submitStatus && submitStatus.type === "error" && (
                <p className="status-message status-message-error">{submitStatus.message}</p>
            )}
        </div>
    );
}