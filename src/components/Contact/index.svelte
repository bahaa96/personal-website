<div class="container" id="contact">
  <p class="contact-title">Contact</p>
  <p class="contact-description">Say Hi! or contact me on social media</p>

  <div class="col-lg-8 centered">
    <!-- onSubmit={handleSubmit(onSubmit)} -->
    <form >
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" name="sender_name" id="fullName" placeholder="Full name*" required />
        </div>

        <div class="col">
          <input type="email" class="form-control" name="from_email" id="contactEmail" placeholder="Email*" required />
        </div>
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="subject" id="contactSubject" placeholder="Subject*" required />
      </div>

      <div class="form-group">
        <textarea class="form-control" name="message_html" id="contactTextarea" placeholder="Message*" rows="3" required />
      </div>
      <br />
      <button type={'submit'} name="submit-contact" id="submit-contact" class="btn btn-light button1">Send</button>
    </form>

  </div>
  
</div>  

<style>

/* Contact Container */
#contact {
  margin-top: 8rem;
  text-align: center;
}

/* Contact Title */
.contact-title {
  font-size: 4rem;
  font-family: 'Poppins SemiBold', sans-serif;
  margin-top: 1rem;
}

#contact input, textarea {
  padding: 1.5rem;
  background-color: #1a1919 !important;
  border: 1px solid #383838 !important;
  margin: 0 auto;
  font-size: 0.9rem;
  font-family: 'Poppins Medium', sans-serif;
  display: block;
  margin-top: 3rem;
}

/* Align items on center */
.centered {
  margin:0 auto;
  display: block;
}

.findme-title {
  margin-top: 8rem;
  font-size: 2.5rem;
}

.findme-links {
  margin-top: 3rem;
  word-spacing: 2.5rem;
  font-size: 0.9rem;
  display: inline-block;
  margin-right: 2rem;
}

#contact a {
  color: #fff;
}
</style>