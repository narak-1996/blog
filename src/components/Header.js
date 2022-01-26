import React from 'react';
import './Header.css';
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return <div className='container'>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <p className='largest'>Subscribe</p>
        </div>
        <div className="col-md-3">
          <b className='large' style={{ fontSize: 30 }}>Large </b>
        </div>
        <div className="col-md-3">
          <b className='larges' style={{ fontSize: 20 }}><BsSearch /></b>
        </div>
        <div className="col-md-3">
          <button className='signup'>Sign Up</button>
        </div>
      </div>
    </div>
    <hr />
    <div className='container'>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">World</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">U.S.</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Culture</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Politics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Opinion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Style</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Travel</a>
        </li>
      </ul>
    </div>
    <div className='container-list'>
      <div className='col-md-6'>
        <h2 className='title'>Title of a longer</h2>
        <h2 className='title'>featured blog post</h2>
        <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className='paragraph1'>Continue reading...</p>
      </div>
    </div>
    <br />


    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div className='thumb1'>
                  Thumbnail
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">World</h6>
                  <h4 className="card-titless">Featured post</h4>
                  <h6 className="card-titlesss">Nov 12</h6>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muteds">continue reading...</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div className='thumb1'>
                  Thumbnail
                </div>
                {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-titles">Design</h6>
                  <h4 className="card-titless" >Post title</h4>
                  <h6 className="card-titlesss">Nov 12</h6>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muteds">continue reading...</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-8">
        <div className='fire'>
          <h3>From the Firehouse</h3>
          <hr />
          <div className='fires'><h1>Sample blog post</h1>
          <small>Jaunary 1, 2014 by <small className='part'>Mark</small></small>
          <br /> <br />
          <p>What is a post blog?
            A blog post is any article, news piece, or guide that's published
            in the blog section of a website.</p>
          <hr />

          <p>A blog post typically covers a specific topic or query,
            <small className='part'>is educational in nature </small>, ranges from 600 to 2,000+ words,
            and contains other media types such as images, videos, infographics,
            and interactive charts.</p>
          {/* <br/> */}
          <p>
            What is a good blog post?
            A good blog post is about one topic, one story, one idea.
            Good titles are interesting, descriptive, and engaging.
            It should read like a magazine headline or a TV newsflash,
            daring the reader to click the link.
          </p>
          {/* <br/> */}
          <p>Some sites put their blog at the end of the domain name,
            such as example.com/blog. A simple web search for Google's
            official blog shows that you can find it at blog. google.</p>

          <h1>Heading</h1>
          <p>What is a heading example?
            Heading is defined as the direction a person or thing is moving.
          </p>
          <p>Example code block</p>
          <p>The definition of a heading is the title or subject of an article or another piece of written work.</p>

          <h1>Sub-heading</h1>
          <p>The letter heading, typically found in the upper left-hand
            corner of the page, introduces you to the recipient and includes
            important contextual information such as your name, return address,
            phone number, email and date. Only include the information your audience needs.</p>
          <ul>
            <li>Descriptive headings identify sections of the content in relation both to the Web page</li>
            <li>Descriptive headings help users find specific content and orient themselves within the Web page.</li>
            <li>If you are heading to somewhere, you have a strong expectation of getting there promptly.</li>
          </ul>
          <p>If you are heading for somewhere, you are going in that route, but there is some
            possibility of not reaching it.</p>
          <ol>
            <li>Descriptive headings identify sections of the content in relation both to the Web page</li>
            <li>Descriptive headings help users find specific content and orient themselves within the Web page.</li>
            <li>If you are heading to somewhere, you have a strong expectation of getting there promptly.</li>
          </ol>
          <p>If you are heading for somewhere, you are going in that route, but there is some
            possibility of not reaching it.</p>
        </div>
      </div>
      </div>



      <div className="col-4">
        <div className='container'>
          <div className="card text-white mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-headers">About</div>
            <div className="card-body">
              <p className="card-texts">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="#">
          <div className="card-headerst">Archives</div>
          <p className='parts'>March 2014 February 2014 Jaunary 2014
            December 2013 November 2013 October 2013 September 2013
            August 2013 <br />July 2013 <br />June 2013 <br />May 2013<br />April 2013 </p>
        </div>
        <br />
        <br />
        <br />
        <div className="card-headerst">Elsewhere</div>
        <p className='parts'>GitHub  <br />Twitter <br />Facebook</p>
      </div>
    </div>

    <div className="row">
      <div className="col-8">
        <div className='fire'>
          <h1>Another blog post</h1>
          <small>December 23, 2013 by <small className='part'>Jacob</small></small>
          <br /> <br />
          <p>A blog post typically covers,
            <small className='part'>dis parturient montes</small>, ranges from 600 to 2,000+ words,
            and contains other media types such as images, videos, infographics,
            and interactive charts.</p>
          {/* <br/> */}
          <p>
            What is a good blog post?
            A good blog post is about one topic, one story, one idea.
            Good titles are interesting, descriptive, and engaging.
            It should read like a magazine headline or a TV newsflash,
            daring the reader to click the link.
          </p>
          {/* <br/> */}
          <p>Some sites put their blog at the end of the domain name,
            such as example.com/blog. A simple web search for Google's
            official blog shows that you can find it at blog. google.</p>

          <b><h1>New Feature</h1></b>
          <small>December 14, 2013 by <small className='part'>Chris</small></small>
          <br /> <br />
          <p>What is a heading example?
            These are blog entries or posts and may be in the form of feedback,
            reviews, opinion, videos, etc. and usually contain a link back to the
            desired site using a keyword or several keywords. Blogs have led to
            someHeading is defined as the direction a person or thing is moving.
          </p>
          <ul>
            <li>Descriptive headings identify sections of the content in relation both to the Web page</li>
            <li>Descriptive headings help users find specific content and orient themselves within the Web page.</li>
            <li>If you are heading to somewhere, you have a strong expectation of getting there promptly.</li>
          </ul>
          <p>On the other hand, new companies specialised in blog advertising have been established,
            to take advantage of this new development as well. However,
            activity on blogs will destroy the blogosphere's credibility.</p>
          <p>The definition of a heading is the title or subject of an article or another piece of written work.</p>
          <br /><br />
          <button className='button'>Older</button> &nbsp;
          <button className='button1'>Newer</button>
        </div>
      </div>
    </div>
    <br /><br />
    <section>
      <div className='containers'>
        <form action="">
          <div className='form-group'>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div className='form-group'>
            <label for="description">Description</label>
            <input type="text" id="description" name="description" required />
          </div>
          <div className='form-group'>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className='form-group'>
            <label for="message">Message</label>
            <textarea type="text" id="message" cols="30" rows="10" name="message" required />
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <div id="status" className='error'>Success</div>
    </section>

  </div>;
};

export default Header;

{/* <div>
   <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
 <div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required />
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</div>
</form>
</div> */}



{/* <div className="col">
<div className="card mb-3" style={{ maxWidth: 540 }}>
    <div className="row g-0">
      <div className="col-md-4">
        <div className='thumb1'>
          Thumbnail
        </div>
      <img src="..." className="img-fluid rounded-start" alt="..." /> 
    </div>
  </div>
    <div class="container">
      <div class="row">
         <div class="col">
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">World</h6>
              <h4 className="card-titless">Featured post</h4>
              <h6 className="card-titlesss">Nov 12</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muteds">continue reading...</small></p>
            </div>
          </div> 
           <div className="row g-3">
            <div className="col-md-5">
              <div className='thumb'>
                Thumbnail
              </div>
            </div>
          </div> 
         </div>
      </div>
    </div>
</div>
</div>  */}
