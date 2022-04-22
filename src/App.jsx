
import { useState } from 'react';
import './App.css';
import data from './data'
import SingleQuestion from './Questions'
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <div class="container">
        <div class="header">
            <div class="logoHeader">financer</div>
            <div class="headerIcon">
                <ul>
                    <li>Tax calculator</li>
                    <li>share</li>
                    <li>insurence</li>

                </ul>
            </div>
            
        </div>
        <div class="section1">        
            <h2><span class="headi"></span><br/><span class="headi2"></span> </h2>
            <p><i><span class="para"></span></i></p>
            <p><span class="para2"></span></p>
        </div>
        <div class="block2">
            <div class="taxCal">
                <i class="fa-solid fa-file-invoice-dollar"></i>
                <p>Tax <br/>calculator</p>
            </div>
            <div class="insurance">
                <img src="./images/comparison.png" alt="" />
                <p>Tax <br/>calculator</p>
            </div>
            <div class="stock">
                <img src="./images/26072-3-stock-market-file-thumb.png" alt="" />
                <p>Tax <br/>calculator</p>
            </div>
        </div>
        <div className="sec">
        <div class="section3">
            <h1>Publications</h1>
            <div class="line"></div>
           <p>The Communications department of CMAI disseminates information and is the link between members and all <br/>
            our stakeholders. It shares information within the network through the quarterly newsletter and encourages <br/>
            sharing of good practices and knowledge through its quarterly Journal, Footsteps and other reports.</p>
            
            <div class="publication">
                <div class="pub1">
                    <img class="pubImg" src="./images/time.png" alt="" />
                    <h2 class="pubHead">5 Minutes Policy Issuance*</h2>
                    <p>Say no to spending hours and days in queues doing the paperwork for your insurance policy.
                         Get your insurance issued instantly with InsuranceDekho.
                         The entire process from selecting the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.</p>
                </div>
                <div class="pub2">
                    <img class="pubImg" src="./images/policy-sold.png" alt="" />
                    <h2 class="pubHead">Over 45 Lac Happy Customers</h2>
                    <p>InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful
                         experience to more than 45 lac customers with the help of our transparent and quick process, a dedicated support
                          team along with the availability of numerous insurers.</p>
                </div>
                <div class="pub3">
                  
                    <img class="pubImg" src="./images/support.png" alt="" />
                    <h2 class="pubHead">Dedicated Support Team</h2>
                    <p>Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case 
                        of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of
                         a claim, our team of experts is at your service all days.</p>
                </div>
            </div> 
        </div>
        </div>
        <div className="section4">
            <h2>Frequently Asked Questions About Insurance</h2>
            <div class="line"></div>
            {questions.map((question)=>{
                return <SingleQuestion key = {question.id} title={question.title} info = {question.info}/>
            })}
        </div>
    </div>
    </div>
  );
}

export default App;
