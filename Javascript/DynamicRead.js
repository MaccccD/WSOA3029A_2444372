const essayContent = 
`<article>
            <h1 class="Heading" id="title1"><u>Exploring how interactive visualizations, combined with marrative elements, contribute to (or detract from) the communication of complex information.</u></h1>

            <section>
                <p class="Section">
                 Data visualizations have revolutionized the way we understand complex information, but can it also be used to expose algorithmic biases and existing power structures in AI models? 
                 This essay critically examines the data visualization techniques used in the 'Lighthouse Reports' case study on 'Suspicious machine methodology', focusing on the Rotterdam algorithmic risk scoring system. 
                 Through a close analysis of the UI/UX principles, data-driven storytelling, and interactivity, this essay reveals how this case study has utilized data visualizations techniques in ways that enabled users 
                 to decipher the algorithm's decision-making process. By combining the use of narrative elements used in the case study and the interactive elements used, it will also reveal how the latter combination has 
                 contributed to the successful scrutiny of the model within which the risk scoring system was built and the implications of the way the data was presented has on the insights that users derived from the project.
                </p>
            </section>

            <h2 class="Sub-heading" id="title2">1. Case Study Exposition:</h2>
            <section>
                <p class="Section">
                 “Suspicious machine methodology” by Justin-Casimir Braun et al, published on the Wired website on the 06th of March 2023 at 07h00 is data-driven journalism methodology that aimed to expose the discrepancies of 
                 the machine learning algorithm of a risk scoring system by analysing the algorithm’s inputs and outputs. To do this, the journalism piece utilized data-driven journalism techniques, including data analysis and 
                 visualizations, to examine the algorithm's decision-making process. In doing this, it also revealed the ways in which the algorithm has been discriminatory against certain ethnic groups based on gender, age and 
                 the ability to speak a Dutch language. This methodology examines a machine learning model deployed by Rotterdam, a city in Netherlands. As a welfare provider to the residents of the city, Rotterdam has used a 
                 risk -scoring system to identify potential fraud and optimize welfare distribution, but ultimately perpetuating biases <cite>(Braun, 2023)</cite>. This fraud prediction system processes different inputs including age, gender, 
                 language skills etc. to generate a risk score between 0 and 1, impacting thousands of individuals relying on welfare support, exacerbating social inequalities. The project's key finding is that the algorithm 
                 perpetuates biases against certain ethnic groups, highlighting the need for transparency and accountability in machine learning systems <cite>(Braun, 2023; Kollias, 2023)</cite>.   
                </p>
            </section>

            <h3 class="Sub-heading" id="title3"> 2. Data Visualization Techniques Used :</h3>
            <section>
               <p class="Section">
                 The "Suspicious machine methodology" employs a range of data visualization techniques to present statistical information in an accessible and intuitive manner. Bar charts are used to illustrate the factors contributing
                 to the flagging of Rotterdam's welfare recipients, with longer bars indicating greater impact. Tree diagrams provide a detailed breakdown of the scoring process, tracing the trajectory of questions and answers that lead 
                 to a risk score between 0 and 1. Scatter plots, displayed in a histogram format, use color-coded circles to represent individual risk scores, facilitating a clear distinction between high and low-risk categories(See Figure 1). 
                 The judicious selection and application of these techniques enable users to decipher the data's underlying objectives. For instance, the use of color-coded circles in scatter plots accelerates understanding of risk score differences
                 when it comes to "Parenthood" being deemed as a factors that increases the likelihood of getting flagged for commiting fraud.
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Bar Chart 2.png" title="A histogram chart with yellow color coded circles showing 'Parenthood' as one of the factors that increase the likelihood of being flagged " width="600" height="400" alt=" A Histogram showing 'Parenthood' as a factor that increase then likelihood of getting flagged">
                        <figcaption>
                            Figure 1: A histogram chart showing the risk difference of how "Parenhtood" 
                            increases the likelihood of an individual getting flagged for committing fraud. <cite>(Kollias,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Bar Chart.png" title="A Bar chart showing the different factors that cause citizerns to get flagged and their percentages " width="600" height="400" alt="A Bar Chart showing the different factors that determine flagging decisions">
                        <figcaption>
                            Figure 2: A Bar chart showing the different factors that determine flagging decisions and their percentages <cite>(Kollias,2023).</cite>
                        </figcaption>
                    </figure>
                 </div>
               </p>
               <p class="Section">
                 The use of various visualization techniques, as shown in Figures 1 and 2, highlights the suitability of each method in appealing to different user preferences and accommodating diverse information-processing styles. 
                 By presenting information in multiple ways, visualization techniques cater to individual needs, ultimately enhancing user comprehension and facilitating deeper insights into the data.
               </p>
             </section>

             <h4 class="Sub-heading" id="title4">3. The incorporation of interactivity within data visualizations :</h4>
             <section>
             <p class="Section">
                 According to (Vorontsova, 2024), “Interactive data visualization incorporates tools to improve how you engage with the information. It helps users modify relevant data to see more detail, form questions, 
                 create insights, and fully grasp its value”. In the “Suspicious machine methodology” case study, the ability to toggle allows users to manipulate data for visual representation. By toggling the dashboard, 
                 users can immediately see the impact of  the specific aspect in how it not only increases the risk score but also the ranking within which enabling a certain toggle has on placing the recipients of the 
                 welfare as either a high risk or low risk. As shown in Figure 3 and 4 below:
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Interactivity 1.png" title="A Case Profile of an individual showing the toggles of the different factors that increase the likelihood of being flagged." width="600" height="400" alt="A Case Profile image of an individual showing the toggles of the different factors that cause them to get flagged.">
                        <figcaption>
                            Figure 3: A few toggled turned "On" that relate to each flagging factor and the impact of that on the risk ranking and socres.<cite>(Kollias,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Interactivity 2.png" title="A Case Profile of an individual showing the toggles of the different factors that increase the likelihood of being flagged." width="600" height="400" alt="A Case Profile image of an individual showing the toggles of the different factors that cause them to get flagged.">
                        <figcaption>
                            Figure 4: Majority  of toggles turned "On" that relate to each flagging factor and the impact of that on the risk ranking and scores.<cite>(Kollias,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 </p>
                 <p class="Section">
                     Through the action of manipulating the interactive elements of the case profile elements, users are immediately able to see a response related to their action, accelerating their comprehension.  
                     By using an interactive dashboard through toggles, Lighthouse Reports allows users to effectively see and experience the effect of switching on toggles and the results of that in the subject matter concerned. 
                     Furthermore, the immediate feedback loop has a dual effect in that: it increases understanding and enhances user engagement with the underlying biases in the risk scoring system. 
                     This engagement reveals the biases' significant impact on welfare recipients' livelihoods. By adapting conventional toggles to an interactive dashboard, 
                     Lighthouse Reports successfully merges traditional understanding with data visualization, effectively conveying its points about the subject matter.
                  </p>
            </section>

            <h4 class="Sub-heading" id="title5">4. The Application of UI/UX Principles :</h4>
            <section>
                <p class="Section">
                 According to (Direduryan, 2023), the epitome of what justifies a good application of UI/UX design principles is the evidence creating a product that understands and meets the needs of its users in an intuitive and easy way. 
                 It should be designed with all users in mind including those with disabilities and considers those use assistive technologies <cite>(Pin, 2022)</cite>. Part of what constitutes good UX design principles is the product’s ability to be usable. 
                 In the Suspicious Machine Methodology case study, the effective usage of scrolling to control where users are, what they should be seeing and how that is supposed to increase their overall understanding of the subject matter at 
                 hand through their data visualization and interactive dashboard is well done. This is because users have been allowed to navigate the different sections of the overall website and data visualizations in an intuitive way, one that 
                 prioritizes effective reduction of cognitive load and reinforces development of insight and understanding. Furthermore, the ability to smoothly scroll through the website while discovering different data visualizations techniques 
                 used and seeing the state of the screen change provides users with a clear indication of their actions and increases the feedback loop the entire piece provides in both the site and the visualizations shown. See Video below: 
                 <div class="Chart">
                   <picture>
                      <figure>
                        <video controls width="600px" height="600px">
                            <source src="../Videos/UI and UX Principles.mp4" type="video/mp4">
                        </video>
                        <title>Demonstration of UI/UX Principles within the case study</title>
                        <figcaption>Demonstration of the effectiveness of the scrolling to reduce cognitive load and increase overall understanding.</figcaption>
                     </figure>
                  </picture>
                 </div>
                </p>
            </section>

           
            <h4 class="Sub-heading" id="title6">5.  Accessibility Considerations in the case study :</h4>
            <section>
                <p class="Section">
                 As far as accessibility of the different forms of data visualizations is concerned, this case study ensured that their techniques appeal to and accommodate all forms of differences there are in the users that might interact with their data-driven storytelling piece. 
                 For instance, their visualizations pass the contrast checker specifically with how the black background accentuates and exposes the red text and white text so vividly and is also still legible to users who have different vision problems. As a result, these diverse 
                 color palettes drive the storytelling associated with it in context of the case study because the use of red stands to represents the danger or the harm that comes with being flagged. This direct conventional use of red and black (to symbolize the darkness of the 
                 risk scoring system) further makes the subject matter of the journalism piece more compelling. See figure 5 below:
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Color Blindess Checker.png" title="A Color Blindness checker showing the visibility of the site on different vision spectrums" width="600" height="400" alt="A Color Blindness checker screengrab showing the visibility of the site on different vision spectrums.">
                        <figcaption>
                            Figure 5: A Color Blindness screengrab showing how the site looks like from the vision perspective of someone who has 'Tritanopia'.<cite>(Kollias,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 <div class="Chart">
                    <figure>
                        <img src="../Images/B&W Contrast Checker.png" title="A Color Contrast checker showing the contrast between the sites usage of white text color on a black bakground" width="600" height="400" alt="A Color Contrast checker screengrab showing the contrast between white text color and a black background.">
                        <figcaption>
                            Figure 6: A Color Contrast screengrab showing the sites contrast colors between white text color and the black background.<cite>(Braun,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 <div class="Chart">
                    <figure>
                        <img src="../Images/R&B Contrast Checker.png" title="A Color Contrast checker showing the contrast between the sites usage of red text color on a black bakground" width="600" height="400" alt="A Color Contrast checker screengrab showing the contrast between red text color and a black background.">
                        <figcaption>
                            Figure 7: A Color Contrast screengrab showing the sites contrast colors between red text color and the black background.<cite>(Braun,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 </p>
                 <p class="Section">
                     In Figure 6 and 7 above, different users are accommodated by virtue of the consideration not only in the color palettes and the choice of colors used for readability and visibility for all 
                     but also in the type of typography implored to display the information and the feedback that is meant to be received by different users. 
                 </p>
            </section>

            <h3 class="Sub-heading" id="title7">6. Data-driven storytelling techniques :</h3>

            <section>
                <p class="Section">
                 According to (Zhao, 2022), the application of data-driven storytelling is mostly practiced using familiar narrative mechanisms to make highly complex phenomena understandable. 
                 In the “Suspicious Machine Methodology” case study, the juxtaposition of creating two fictional characters such as Sarah and Yusef, makes the overall subject matter of the risk 
                 scoring systems bias more compelling because the output scores of the two characters and their trajectory is different. While Sarah’s character exists to prove bias of the risk 
                 scoring system from a woman with children standpoint, Yusef’s character adds up to the bias when he also ends up being flagged for his inability to speak Dutch as he is Arabic. 
                 The creation of a storyline that is contextualized within the subject matter of the data-journalism piece allows the visualization techniques used to not become standalone but 
                 have been effectively aided by the narration and plot points that enhance depth of engagement and overall understanding. As shown in figures 8 and 9, both Sarah and Yusef 
                 become the prime examples that embody some of the aspects that contribute to recipients of the welfare becoming flagged even though their storylines and back stories are fictionally 
                 different. By relying on elements of a narrative such as plot points and a linear storyline progression, this case study exemplifies how the juxtapositions of the latter with the 
                 data visualization techniques have resulted in a well-rounded understanding of the subject matter at hand.
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Data-driven Storytelling 1.png" title="A fictional representation of Sarah character(Woman) to drive the bias of the risk scoring system" width="600" height="400" alt="A fictional representation of Sarah’s character(woman) to drive the  bias of the risk scoring system.">
                        <figcaption>
                            Figure 8: A fictional woman  character (Sarah) screengrab to show the biasedness of the risk scoring system.<cite>(Kollias,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                 <div class="Chart">
                    <figure>
                        <img src="../Images/Data-driven Storytelling 2.png" title="A fictional representation of Yusef’s character(man) to drive the bias of the risk scoring system" width="600" height="400" alt="A fictional representation of Yusef’s character (man) to drive the  bias of the risk scoring system.">
                        <figcaption>
                            Figure 9: A fictional man  character(Yusef) screengrab to show the biasedness of the risk scoring system.<cite>(Kollias,2023)</cite>.
                        </figcaption>
                    </figure>
                 </div>
                </p>
                <p class="Section">
                      As shown in two figures above, the two characters’ different plot points and back story highlights the bias root of the risk scoring system and the detriment that has on their lives as fictional characters 
                     as well as the actual recipients of the welfare in real life. <cite>(Kollias, 2023)</cite>
                </p>
            </section>

            <h3 class="Sub-heading" id="title8">7. Conclusion: </h3>

            <section>
                <p class="Section">
                 In conclusion, this essay has critically examined the impact of data visualization techniques on conveying algorithmic bias in the "Suspicious Machine Methodology" case study. 
                 Through a detailed analysis of the UI/UX principles, data-driven storytelling, and interactivity, it has demonstrated how these techniques effectively expose the biases in the risk scoring system. 
                 The use of interactive dashboards, toggles, and charts has enabled users to decipher the algorithm's decision-making process, revealing the perpetuation of biases against certain ethnic groups. 
                 By combining narrative elements with data visualization, the case study has created a compelling and accessible critique of the risk scoring system. 
                 This essay has shown that data visualization can be a powerful tool for scrutinizing AI models and promoting transparency and accountability. 
                 As the use of AI continues to grow, it is essential to develop and apply effective data visualization techniques to ensure that these systems serve all individuals fairly and justly.
                </p>
            </section>

            <h3 class="Sub-heading" id="title9">References :</h3>
            <section>
                <p class="Section">
                    Braun, J. &. C. E. &. A. H. &. G. G. &. M. D. &. H. D.(2023). Suspicion Machines Methodology : Inside the Suspicion Machine. [Online]
                    <br> 
                    Available at:<a href="https://www.lighthousereports.com/suspicion-machines-methodology/" target="_blank">Suspicion Machines Methodology: Inside the Suspicion Machine.</a>
                    <br>
                    [Accessed 30 August 2024].
                    <br>
                    Direduryan, C. (2023). LinkedIn : The Basics of UX and UI Design Principles. [Online]
                    <br> 
                    Available at: <a href="https://www.linkedin.com/pulse/basics-ux-ui-design-principles-chris-direduryan" target="_blank">The Basics of UI/UX Design Principles.</a>
                    <br>
                    [Accessed 31 August 2024].
                    <br>
                    Kollias, F. (2023). Lighthouse Reports : Suspicion Machines Methodology. [Online]
                    <br> 
                    Available at: <a href="https://www.lighthousereports.com/suspicion-machines-methodology/" target="_blank">Lighthouse Reports: Suspicion Machines Methodology.</a>
                    <br>
                    [Accessed 31 August 2024].
                    <br>
                    Pin, U. (2022). The Basic Principles of User Interface Design. [Online] 
                    <br>
                    Available at: <a href="https://www.uxpin.com/studio/blog/ui-design-principles/ " target="_blank">The Basic Principle of User Interface Design.</a>
                    <br>
                    [Accessed 30 August 2024].
                    <br>
                    Vorontsova, J.(2024). Datylon : What Is Interactive Data Visualization?. [Online] 
                    <br>
                    Available at: <a href="https://www.datylon.com/blog/what-is-interactive-data-visualization#:~:text=Interactive%20data%20visualization%20incorporates%20tools,graphic%20displays%20like%20responsive%20dashboards" target="_blank">Interactive Data Visualizations.</a>
                    <br>
                    [Accessed 30 August 2024].
                    <br>
                    Zhao, Z. &. E. N. (2022). The Stories We Tell About Data: Media Types for Data-Driven Storytelling. arXiv.org ed. Ithaca: Cornell University Library.
                </p>
                  </section>
        </article>
        <div class="Sidebar">
            <div class="Sidebar-content">
            <ul>
              <li>Table of Contents</li>
              <li><a href="#title1">Introduction</a></li>
              <li><a href="#title2">1. Case Study Exposition</a></li>
              <li><a href="#title3">2. Data Visualization Techniques</a></li>
              <li><a href="#title4">3. Interactivity in Visualizations</a></li>
              <li><a href="#title5">4. Application of UI/UX Principles</a></li>
              <li><a href="#title6">5. Accessibility Considerations</a></li>
              <li><a href="#title7">6. Data-driven storytelling</a></li>
              <li><a href="#title8">7. Conclusion</a></li>
              <li><a href="#title9">8. References</a></li>
            </ul>
            </div>
        </div>

        <section>
            <a href="../Theory/Essay2.html"><button class="Essays">Essay 2 →</button></a>
        </section>`
        //injecting my first essay dynamically :
        const essayContainer = document.getElementById("essayContainer").innerHTML = essayContent;

       