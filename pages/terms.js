import React from "react";
import Header from "./components/Header";
import styles from "../styles/Header.module.css";
import GlobalStyle from "../styles/global.module.css";
import { useTheme } from "../utils/ThemeContext.js";

export default function Terms() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className={darkMode ? `${styles.darkThemeContainer}` : `${styles.lightThemeContainer}`}>
            <Header />
            <div className={`${GlobalStyle.ContainerWidth} ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} mt-5 pt-5`}>
                <br className="d-lg-none d-block" /><br className="d-lg-none d-block" /><br className="d-sm-none d-block" />
                <h5>Terms of Service</h5>
                <hr />
                <i>Effective date: March 4, 2024</i>
                <p className="my-3">
                    Welcome to Quora! Quora is a platform to gain and share knowledge, empowering people to learn from others and better understand the world through our websites and applications (“Quora” or the “Quora Platform”).
                    <br />
                    <br />
                    These terms of service (“Terms”) are an agreement between you and Quora, Inc. (“Quora” “we” or “us”). These Terms govern your use of the products and services we offer. By using Quora, you consent to these Terms.
                    <br />
                    <br />
                    Your access to and use of Quora is also subject to our policies, including our Privacy Policy and Acceptable Use Policy.
                    <br />
                </p>
                <h6>IMPORTANT ARBITRATION NOTICE: IF YOU ARE IN THE UNITED STATES OR CANADA, YOU AGREE THAT DISPUTES BETWEEN YOU AND QUORA WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. WE EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF ARBITRATION BELOW IN SECTION 11.</h6>


                <h6 className="mt-3">1. Your Use of Quora</h6>
                <p><b>1.1 Age requirements and responsibility of parents and legal guardians. </b>Use of Quora by anyone under 13 years of age is prohibited. You represent that you are at least the age of majority in the jurisdiction where you live or, if you are not, your parent or legal guardian must consent to these Terms and affirm that they accept these Terms on your behalf and bear responsibility for your use. If you are accepting these Terms on behalf of someone else or an entity, you confirm that you have the legal authority to bind that person or entity to these Terms.</p>
                <p><b>1.2 Registration </b>
                    When you set up a profile on the Quora Platform, you will be asked to provide certain information about yourself. You agree to provide us accurate information when you create your account on Quora. We will treat information you provide as part of registration in accordance with our Privacy Policy. You should take care in maintaining the confidentiality of your password.
                    <br />
                    <br />
                    The content displayed to you on Quora is based on your interests. When you create an account on Quora, you may be presented with the option to select topics that are of interest to you. Your topic selections, if any, and your subsequent engagement (ex. questions) on the platform determine what content may be shown to you. To learn more, please visit our Help Center.
                </p>
                <p><b>1.3 Compliance with Quora Policies. </b>
                    Quora relies on a number of tools to ensure everyone on Quora has a safe experience while sharing and growing the world's knowledge. We use machine learning, automated tools, and human review to evaluate and determine whether content goes against our Policies as outlined below.
                    <br />
                    <br />
                    In your use of Quora, you agree to follow the Acceptable Use Policy, Platform Policies, Copyright Policy, Trademark Policy, and other published Quora policies at all times. If you see something on Quora that you believe violates our Acceptable Use Policy or any other published Quora policy, please report it to us using the in-product reporting tool, or via our contact form. If you believe that conduct on Quora violates our Copyright or Trademark policy, you may report that violation using the methods described in those policies.
                    <br />
                    <br />
                    Quora has the sole authority and final decision as to whether content or behavior violates these policies. We may enforce these policies in a variety of ways, including, but not limited to written warnings, removal of content, adding warning tags to content, or the limitation or termination of a user’s access to Quora. We may remove accounts for repeated violations of these policies or for a single violation if the policy violation is severe. You can learn more about appealing moderation decisions by visiting our Help Center.
                </p>
                <p><b>1.4 Settings. </b>
                    We offer tools to help you manage privacy, messaging, and other content options for your account. You can review and adjust your account settings by visiting the “Settings” section of your account.
                </p>
                <p><b>1.5 Changes to the Quora Platform. </b>
                    We are always trying to improve your experience on the Quora Platform. We may add, remove or change features without notice to you.
                </p>
                <p><b>1.6 Feedback. </b>
                    We welcome your feedback and suggestions about how to improve the Quora Platform. Feel free to submit feedback at quora.com/contact. By submitting feedback, you grant us the right, at our discretion, to use, disclose and otherwise exploit the feedback, in whole or part, freely and without compensation to you.
                </p>


                <h6 className="mt-3">2. Privacy</h6>
                <p>Our privacy practices are set forth in our Privacy Policy. By using Quora, you accept our Privacy Policy, regardless of whether you are a registered user.</p>


                <h6 className="mt-3">3. Your Content</h6>
                <p><b>3.1 Your Content. </b>
                    Quora enables you to add posts, text, photos, videos, links, and other files and information to share with other users of Quora. All material that you upload, publish, display, or transmit to others via Quora will be referred to collectively as “Your Content.” You, or your licensors, as applicable, retain ownership of the copyright and other intellectual property in Your Content, subject to the non-exclusive rights granted below.
                    <br />
                    <br />
                    You acknowledge and agree that, as part of using Quora, Your Content may be viewed by the general public. Please understand where you are posting on Quora and choose the right space, features, and settings for you and Your Content.
                </p>
                <p><b>3.2 License and Permission to Use Your Content.</b>
                    By submitting, posting, displaying, or transmitting Your Content on or through the Quora Platform, you grant Quora and its affiliated companies a nonexclusive, worldwide, royalty free, fully paid up, transferable, sublicensable (through multiple tiers), license to use, copy, reproduce, process, adapt, modify, create derivative works from, publish, transmit, store, display and distribute, translate, communicate and make available to the public, and otherwise use Your Content in connection with the operation or use of the Quora Platform or, subject to our Privacy Policy, the promotion, advertising or marketing of the Quora Platform or our business partners, in any and all media or distribution methods (now known or later developed), including via means of automated distribution, such as through an application programming interface (also known as an “API”). You agree that, subject to and consistent with our Privacy Policy, this license includes the right for Quora to make Your Content available to other companies, organizations, business partners, or individuals who collaborate with Quora for the syndication, broadcast, communication and making available to the public, distribution or publication of Your Content on the Quora Platform or through other media or distribution methods. This license also includes the right for other users of the Quora Platform to use, copy, reproduce, adapt, modify, create derivative works from, publish, transmit, display, and distribute, translate, communicate and make available to the public Your Content, subject to these Terms of Service and our Privacy Policy. Except as expressly provided in these Terms, this license will not confer the right for you to use automated technology to copy or post questions and answers or to aggregate questions and answers for the purpose of making derivative works. If you do not wish to allow your answers to be translated by other users, you can globally opt out of translation in your profile settings or you can designate certain answers not for translation.
                    <br />
                    <br />
                    Once you post an answer to a question, you may edit or delete your answer at any time from public display on https://www.quora.com, except in the case of anonymously posted answers. However, we may not be able to control removal of the answer from display on syndicated channels or other previously distributed methods outside of https://www.quora.com. Quora may remove suspected spam from your answers. Once you post a question, it may be edited or deleted by other users or by Quora at any time. Any edits and changes made by you may be visible to other users. The right for Quora to copy, display, transmit, publish, perform, distribute, store, modify, and otherwise use any question you post, and sublicense those rights to others, is perpetual and irrevocable, to the maximum extent permitted by law, except as otherwise specified in these Terms.
                    <br />
                    <br />
                    You acknowledge and agree that Quora may preserve Your Content and may also disclose Your Content and related information if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) comply with legal process, applicable laws or government requests; (b) enforce these Terms of Service; (c) respond to claims that any of Your Content violates the rights of third parties; (d) detect, prevent, or otherwise address fraud, security or technical issues; or (e) protect the rights, property, or personal safety of Quora, its users, or the public.
                    <br />
                    <br />
                    You understand that we may modify, adapt, or create derivative works from Your Content in order to transmit, display or distribute it over computer networks, devices, service providers, and in various media. We also may remove or refuse to publish Your Content, in whole or part, at any time.
                    <br />
                    <br />
                    You further give us the permission and authority to act as your nonexclusive agent to take enforcement action against any unauthorized use by third parties of any of Your Content outside of the Quora Platform or in violation of our Terms of Service.
                </p>
                <p><b>3.3 Your Responsibilities for Your Content. </b>
                    By posting Your Content on the Quora Platform, you represent and warrant to us that: (1) you have the ownership rights, or you have obtained all necessary licenses or permissions to use Your Content and grant us the rights to use Your Content as provided for under these Terms, and (2) that posting Your Content violates no intellectual property or personal right of others or any other applicable law or regulation, including any laws or regulations requiring disclosure that you have been compensated for Your Content. You accept full responsibility for avoiding infringement of the intellectual property or personal rights of others or violation of laws and regulations in connection with Your Content. You are responsible for ensuring that Your Content does not violate Quora’s Acceptable Use Policy, Copyright Policy, Trademark Policy, any other published Quora policy, or any applicable law or regulation. You agree to pay all royalties, fees, and any other monies owed to any person by reason of Your Content.
                </p>


                <h6 className="mt-3">4. Our Content and Materials</h6>
                <p><b>4.1 Our Content and Materials. </b>
                    All intellectual property in or related to Quora and the Quora Platform (specifically including, but not limited to our software, the Quora marks, the Quora logo, but excluding Your Content) is the property of Quora, Inc., or its subsidiaries and affiliates, or content posted by Quora users and others that has been licensed to us (collectively “Our Content and Materials”).
                </p>
                <p><b>4.2 Data. </b>
                    All data Quora collects (“Usage Data”) about use of the Quora Platform by you or others is the property of Quora, Inc., its subsidiaries, and affiliates. For clarity, Usage Data does not include Your Content and is separate from Our Content and Materials. Please refer to our Privacy Policy for information about how we process your personal information.
                </p>
                <p><b>4.3 Our License to You. </b>
                    We grant you a personal, limited, non-exclusive license to use and access Our Content and Materials and Usage Data as made available to you on the Quora Platform in connection with your use of the Quora Platform, subject to the terms and conditions of this agreement.
                    <br />
                    <br />
                    Quora gives you a worldwide, royalty-free, revocable, personal, non-assignable and non-exclusive license to re-post a small portion of any answer or post posted by other Quora users anywhere on the web, subject to these Terms and provided that: (a) the content in question was added to the Quora Platform after April 22, 2010; (b) the user who created the content has not explicitly marked the content as not for reproduction on the Quora Platform; (c) you do not modify the content; (d) you attribute Quora by name in readable text and with a human and machine-followable link (an HTML anchor tag) linking back to the page displaying the original source of the content on https://quora.com on every page that contains such content; (e) upon request, either by Quora or a user, you remove the user's name from content which the user has subsequently made anonymous; (f) upon request, either by Quora or by a user who contributed to the content, you make a reasonable effort to update a particular piece of content to the latest version on the Quora Platform; and (g) upon request, either by Quora or by a user who contributed to the content, you make a reasonable attempt to delete content that has been deleted or marked as not for reproduction on the Quora Platform; (h) you do not use any automated tools to aggregate or create derivative works, and (i) you do not use any of Our Content or Materials to train or develop any AI, large language models or machine learning algorithms. In exercising these rights, you may not implicitly or explicitly assert any connection with, sponsorship or endorsement by Quora, or any Quora user, without separate, express prior written permission from us.
                    <br />
                    <br />
                    We may terminate our license to you at any time for any reason. We have the right but not the obligation to refuse to distribute any content on the Quora Platform or to remove content for any reason in our sole discretion. Except for the rights and license granted in these Terms of Service, we reserve all other rights and grant no other rights or licenses, implied or otherwise.
                </p>
                <p><b>4.4 Restricted Uses. </b>
                    You represent and warrant that you will not:
                </p>
                <ul>
                    <li>
                        Access, search or collect data from the Quora Platform (through automated or other means, including artificial intelligence or machine learning) (1) to create derivative works of Our Content and Materials; (2) to train or develop any AI, large language models or machine learning algorithms on Our Content or Materials; (3) to create any service competitive to the Quora Platform; or (4) for other commercial purposes except as expressly permitted by these Terms of Service or the written consent of Quora.
                    </li>
                    <li>
                        Use Quora in any manner that could interfere with, disable, disrupt, overburden, or otherwise impair the Quora Platform;
                    </li>
                    <li>
                        Reverse assemble, reverse compile, decompile any part of the Quora Platform;
                    </li>
                    <li>
                        Upload, transmit, or distribute to or through the Quora Platform any viruses, worms, malicious code, or other software intended to interfere with the Quora Platform, including its security-related features; or
                    </li>
                    <li>
                        Gain access to (or attempt to gain access to) another user’s account or any non-public portions of the Quora Platform, including the computer systems or networks connected to or used together with the Quora Platform.
                    </li>
                </ul>
                <p><b>4.5 Permission to Crawl. </b>
                    If you operate a search engine, subject to the Restricted Uses section above, we conditionally grant permission to crawl the Quora Platform subject to the following rules: (1) you must use a descriptive user agent header; (2) you must follow robots.txt at all times; (3) your access must not adversely affect any aspect of the Quora Platform’s functioning; (4) you must make it clear how to contact you, either in your user agent string, or on your website if you have one.
                </p>
                <p><b>4.6 No Endorsement or Verification. </b>
                    Please note that the Quora Platform contains access to third-party content, products and services, and it offers interactions with third parties. Participation or availability on the Quora Platform does not amount to endorsement or verification by us. We make no warranties or representations about the accuracy, completeness, or timeliness of any content posted on the Quora Platform by anyone.
                </p>
                <p><b>4.7 Ownership. </b>
                    You acknowledge and agree that Our Content and Materials remain the property of Quora's users or Quora. The content, information and services made available on the Quora Platform are protected by U.S. and international copyright, trademark, and other laws, and you acknowledge that these rights are valid and enforceable.
                </p>


                <h6 className="mt-3">5. More About Certain Offerings on the Quora Platform</h6>
                <p><b>5.1 Digests. </b>
                    When you sign up for the Quora Platform, the service includes receipt of digests of content that may be of interest to you. You can opt out of receipt of the digests, and adjust other communication settings, by going to “Email and Notification” settings in your account profile, as further described in our Privacy Policy.
                </p>
                <p><b>5.2 Advertisements.  </b>
                    The Quora Platform may include advertisements, which may be targeted to content or information on the Quora Platform, your usage of the Quora Platform, or other information as detailed in our Privacy Policy, in an effort to make them relevant to you. The types and extent of advertising by Quora are subject to change. In consideration for Quora granting you access to and use of the Quora Platform, you agree that Quora and its third-party providers and partners may serve such advertising on the Quora Platform. If you wish to become an advertiser, you will be required to enter into separate and supplemental terms with us about providing advertising services on the Quora Platform.
                </p>
                <p><b>5.3 Spaces. </b>
                    Spaces is a feature that allows a user to form communities and share content around shared interests and tastes.
                </p>
                <p><b>5.4 Subscriptions. </b>
                    Certain content in Spaces or from other areas of the Quora Platform may be available only by subscription. In addition to these Terms of Service, subscriptions are subject to the Subscriber Terms of Service. Creating subscriptions and participating in advertising revenue share is subject to the Earnings Terms of Service.
                </p>
                <p><b>5.5 Poe. </b>
                    Poe is a platform by Quora that lets people ask questions, get instant answers, and have back-and-forth conversations with Large Language Models (“LLMS”). Use of Poe is subject to the Poe Terms of Service.
                </p>
                <p><b>5.6 Legal, Medical & Other Professional Contributors. </b>
                    Some users who post content are members of legal, medical, investment and other licensed professions (collectively, “Professional Contributors”). Content posted by Professional Contributors should not be relied on as a substitute for advice from a professional that is appropriate for your specific situation. Quora has provided certain disclaimer template language that Professional Contributors may edit and incorporate in their answers. Ethics rules differ by state or location, and it is the responsibility of Professional Contributors to determine and provide disclaimers appropriate for their profession and the content provided.
                </p>
                <p><b>5.7 Buttons, Links, and Widgets. </b>
                    You have permission to use Quora's buttons, links, and widgets, subject to these Terms of Service (including the disclaimers and limitations of liability) and provided that: (a) your use of such buttons, links, and widgets link only to the Quora Platform; (b) you will not modify such buttons, links, or widgets or associated code in any manner; (c) you will not use any such buttons, links, or widgets in any manner which implies or suggests that Quora endorses, sponsors, or recommends the website on which such buttons, links, and widgets are used; and (d) the use of such buttons, links, and widgets, and the website on which such buttons, links, and widgets are used do not violate Quora’s Acceptable Use Policy
                </p>
                <p><b>5.8 Services that Require Separate Agreement. </b>
                    Certain features or services may require that you enter into a separate and supplemental written agreement prior to use.
                </p>


                <h6 className="mt-3">6. Third-Party Links, Sites, and Services</h6>
                <p>
                    The Quora Platform may offer you the opportunity to visit links to other websites or to engage with third-party content, products or services. We do not endorse or assume any responsibility for any such third party sites, content, products, or services. If you access any third party website, content, product or service from Quora, you do so at your own risk and you agree that Quora has no liability arising from your use of or access to any third party website, content, product or service.
                </p>


                <h6 className="mt-3">7. Reporting Violations of Your Intellectual Property Rights, Quora Policies, or Applicable Laws.</h6>
                <p><b>7.1 Copyright Policy and Trademark Policy. </b>
                    We maintain a Copyright Policy and Trademark Policy. For more information, including detailed information about how to submit a request for takedown if you believe content on the Quora Platform infringes your intellectual property rights, please read our Copyright Policy and Trademark Policy. For your convenience, we provide you the following Copyright Infringement Claim Form and Trademark Infringement Claim Form, which you should use, as applicable, for fastest processing.
                </p>
                <p><b>7.2 Reports of Other Violations.  </b>
                    If you believe content on the Quora Platform violates Quora’s Acceptable Use Policy or otherwise violates applicable law (apart from copyright or trademark violations) or other Quora policies, you may report it to us using the in-product reporting tool, or via our contact form.
                    <br />
                    <br />
                    We have no obligation to delete content that you personally may find objectionable or offensive. We endeavor to respond promptly to requests for content removal, consistent with our policies and applicable law.
                </p>


                <h6 className="mt-3">8. Termination.</h6>
                <p>
                    You may close your account at any time by going to account settings and disabling your account. We may terminate or suspend your Quora account if you violate these Terms, any Quora policy, or for any other reason.
                </p>


                <h6 className="mt-3">9. Indemnification.</h6>
                <p>
                    You agree to release, indemnify, and defend Quora Entities from all third-party claims and costs (including reasonable attorneys’ fees) arising out of or related to: (1) your use of the Quora Platform, (2) Your Content, (3) your conduct or interactions with other users of the Quora Platform, or (4) your breach of any part of these Terms. We will promptly notify you of any such claim and will provide you (at your expense) with reasonable assistance in defending the claim. You will allow us to participate in the defense and will not settle any such claim without our prior written consent. We reserve the right, at our own expense, to assume the exclusive defense of any matter otherwise subject to indemnification by you. In that event, you will have no further obligation to defend us in that matter.
                </p>


                <h6 className="mt-3">10. Disclaimers And Limitation Of Liability</h6>
                <p>
                    PLEASE READ THIS SECTION CAREFULLY SINCE IT LIMITS THE LIABILITY OF QUORA ENTITIES TO YOU.
                    <br />
                    <br />
                    “QUORA ENTITIES” MEANS QUORA, INC., AND ANY SUBSIDIARIES, AFFILIATES, RELATED COMPANIES, SUPPLIERS, LICENSORS AND PARTNERS, AND THE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS AND REPRESENTATIVES OF EACH OF THEM. EACH PROVISION BELOW APPLIES TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
                    <br />
                    <br />
                    10.1 WE ARE PROVIDING YOU THE QUORA PLATFORM, ALONG WITH OUR CONTENT AND MATERIALS AND THE OPPORTUNITY TO CONNECT WITH OTHERS, ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, QUORA ENTITIES EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, TITLE, ACCURACY AND COMPLETENESS, UNINTERRUPTED OR ERROR-FREE SERVICE, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR TRADE USAGE.
                    <br />
                    <br />
                    10.2 QUORA MAKES NO PROMISES WITH RESPECT TO, AND EXPRESSLY DISCLAIMS ALL LIABILITY FOR: (i) CONTENT POSTED BY ANY USER OR THIRD PARTY; (ii) ANY THIRD-PARTY WEBSITE, THIRD-PARTY PRODUCT, OR THIRD-PARTY SERVICE LISTED ON OR ACCESSIBLE TO YOU THROUGH THE QUORA PLATFORM, INCLUDING AN INTEGRATED SERVICE PROVIDER OR PROFESSIONAL CONTRIBUTOR; (iii) THE QUALITY OR CONDUCT OF ANY THIRD PARTY YOU ENCOUNTER IN CONNECTION WITH YOUR USE OF THE QUORA PLATFORM; OR (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR CONTENT. QUORA MAKES NO WARRANTY THAT: (a) THE QUORA PLATFORM WILL MEET YOUR REQUIREMENTS; (b) THE QUORA PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (c) THE RESULTS OR INFORMATION THAT YOU MAY OBTAIN FROM THE USE OF THE QUORA PLATFORM, A PROFESSIONAL CONTRIBUTOR, OR ANY OTHER USER WILL BE ACCURATE OR RELIABLE; OR (d) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL OBTAINED OR PURCHASED BY YOU THROUGH THE QUORA PLATFORM WILL BE SATISFACTORY.
                    <br />
                    <br />
                    10.3 YOU AGREE THAT TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUORA ENTITIES WILL NOT BE LIABLE TO YOU UNDER ANY THEORY OF LIABILITY. WITHOUT LIMITING THE FOREGOING, YOU AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUORA ENTITIES SPECIFICALLY WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES, LOSS OF PROFITS, BUSINESS INTERRUPTION, REPUTATIONAL HARM, OR LOSS OF DATA (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR SUCH DAMAGES ARE FORESEEABLE) ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF, OR INABILITY TO USE, THE QUORA PLATFORM.
                    <br />
                    <br />
                    10.4 YOUR SOLE REMEDY FOR DISSATISFACTION WITH THE QUORA PLATFORM IS TO STOP USING THE QUORA PLATFORM.
                    <br />
                    <br />
                    10.5 WITHOUT LIMITING THE FOREGOING, QUORA’S MAXIMUM AGGREGATE LIABILITY TO YOU FOR LOSSES OR DAMAGES THAT YOU SUFFER IN CONNECTION WITH THE QUORA PLATFORM OR THESE TERMS IS LIMITED TO THE AMOUNT PAID TO QUORA IN CONNECTION WITH THE QUORA PLATFORM IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO LIABILITY.
                    <br />
                    <br />
                    10.6 SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR EXCLUSION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES. AS A RESULT, THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU IN WHOLE OR IN PART, AND THE FOREGOING SECTIONS 10.3, 10.4, AND 10.5 WILL NOT APPLY TO A RESIDENT OF NEW JERSEY, TO THE EXTENT DAMAGES TO SUCH NEW JERSEY RESIDENT ARE THE RESULT OF QUORA’S NEGLIGENT, FRAUDULENT, RECKLESS, OR INTENTIONAL MISCONDUCT.
                </p>


                <h6 className="mt-3">11. Legal Disputes and Arbitration Agreement for Users</h6>
                <p>
                    PLEASE READ THE FOLLOWING SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
                    <br />
                    <br />
                    Except for Section 11.11 (Exclusive Venue for Litigation) below, this Section 11 applies only to Quora users in the United States and Canada.
                </p>
                <p>
                    <b>11.1 Initial Dispute Resolution.</b>
                    We are available by email at support@quora.com and by regular post at Quora, Inc., 605 Castro Street, Mountain View, CA 94041 to address any concerns you may have regarding your use of the Quora Platform. Most concerns may be quickly resolved in this manner. The parties agree to use best efforts to settle any dispute, claim, question, or disagreement directly through consultation and good faith negotiations with us, before initiating a lawsuit or arbitration.
                    <br />
                    <br />
                    For any dispute that Quora initiates, we will send our written description of the dispute to the email address associated with your Quora account. The written description must be on an individual basis and provide, at minimum, the following information: your name; a description of the nature or basis of the claim or dispute; and the specific relief sought. If the dispute is not resolved within sixty (60) days after receipt of the written description of the dispute, you and Quora agree to the further dispute resolution provisions below.
                    <br />
                    <br />
                    The aforementioned informal dispute resolution process is a prerequisite and condition precedent to commencing any formal dispute resolution proceeding. The parties agree that any relevant limitations period and filing fees or other deadlines will be tolled while the parties engage in this informal dispute resolution process.
                    <br />
                    <br />
                    Only after the parties have engaged in a good-faith effort to resolve the dispute in accordance with this Initial Dispute Resolution process, and only if those efforts fail, then either party may initiate binding arbitration as the sole means to resolve claims using the procedures set forth below in Sections 11.4 & 11.5. If you are initiating arbitration, a copy of the demand shall also be emailed to legal@quora.com. If Quora is initiating arbitration, it will serve a copy of the demand to the email address associated with your Quora account. The arbitrator has the right to impose sanctions in accordance with the National Arbitration and Mediation (“NAM”) rules and procedures for any frivolous claims or submissions the arbitrator determines have not been filed in good faith, as well as for a party's failure to comply with this Section. The applicable NAM rules and procedures are available at Homepage or by emailing National Arbitration and Mediation’s Commercial Dept at commercial@namadr.com.
                </p>
                <p>
                    <b>11.2 Agreement to Binding Arbitration.</b>
                    If an agreed upon solution is not reached through informal dispute resolution as outlined above within a period of sixty (60) days pursuant to the initial dispute resolution procedure provided in Section 11.1 above, then either party may initiate binding arbitration to formally resolve claims, subject to the terms and exclusion set forth below.
                    <br />
                    <br />
                    You and Quora agree that all claims, disputes, or disagreements that may arise out of the interpretation or performance of the Agreement, which includes the Terms of Service (including its formation, performance, and breach) or payments by or to Quora, or that in any way relate to the provision or use of Quora Services, your relationship with Quora, or any other dispute with Quora, shall be resolved exclusively through binding arbitration in accordance with this Section 11.2 (collectively, the "Arbitration Agreement"). This includes claims that arose, were asserted, or involve facts occurring before the existence of this Arbitration Agreement or any prior agreement as well as claims that may arise after the termination of this Arbitration Agreement, in accordance with the notice and opt-out provisions set forth in Section 11.9). This Arbitration Agreement is governed by the Federal Arbitration Act ("FAA") in all respects and evidences a transaction involving interstate commerce. You and Quora expressly agree that the FAA shall exclusively govern the interpretation and enforcement of this Arbitration Agreement. If for whatever reason the rules and procedures of the FAA cannot apply, the state law governing arbitration agreements in the state in which you reside shall apply.
                    <br />
                    <br />
                    Except as set forth in Sections 11.7 & 11.8, the arbitrator, and not any federal, state or local court or agency, shall have exclusive authority to resolve all disputes arising out of or relating to the interpretation, applicability, enforceability or formation of these Terms, including, but not limited to any claim that all or any part of these Terms are void or voidable, whether a claim is subject to arbitration, and any dispute regarding the payment of administrative or arbitrator fees (including the timing of such payments and remedies for nonpayment). The arbitrator shall be empowered to grant whatever relief would be available in a court under law or in equity.
                    <br />
                    <br />
                    The parties understand that, absent this mandatory provision, they would have the right to sue in court and have a jury trial. They further understand that, in some instances, the costs of arbitration could exceed the costs of litigation and the right to discovery may be more limited in arbitration than in court. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU AND QUORA ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                    <br />
                    <br />
                    Except as set forth in Sections 11.5 & 11.6 below, if any provision of this Arbitration Agreement is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions thereof remain in full force and effect.
                </p>
                <p>
                    <b>11.3 Location.</b>
                    If you are a resident of the United States, arbitration will take place in the County where you reside. For residents in Canada (and anywhere else outside the United States), arbitration shall be initiated in the County of Santa Clara, State of California, United States of America, unless you and Quora otherwise agree or unless the designated arbitrator determines that such venue would be unreasonably burdensome to any party, in which case the arbitrator shall have the discretion to select another venue. For any arbitration conducted in California, You and Quora agree to submit to the personal jurisdiction of any federal or state court in Santa Clara County, California, in order to compel arbitration, to stay proceedings pending arbitration, or to confirm, modify, vacate or enter judgment on the award entered by the arbitrator; and in connection with any such proceeding, further agree to accept service of process by U.S. mail and hereby waive any and all jurisdictional and venue defenses otherwise available.
                </p>
                <p>
                    <b>11.4 Rules.</b>
                    The arbitration will be administered by NAM and resolved before a single arbitrator. If NAM is not available to arbitrate, the parties will select an alternative arbitration provider, but in no event shall any arbitration be administered by the American Arbitration Association.
                    <br />
                    <br />
                    Except as modified by this "Dispute Resolution" provision, NAM will administer the arbitration in accordance with the NAM Comprehensive Dispute Resolution Rules and Procedures, Fees For Disputes When One of the Parties is a Consumer and the Mass Filing Dispute Resolution Rules and Procedures in effect at the time any demand for arbitration is filed with NAM, excluding any rules or procedures governing or permitting class or representative actions. The applicable NAM rules and procedures are available at Homepage
                    <br />
                    <br />
                    You are responsible for your own attorneys’ fees unless the arbitration rules and/or applicable law provide otherwise. The parties agree that NAM has discretion to reduce the amount or modify the timing of any administrative or arbitration fees due under NAM’s Rules where it deems appropriate (including as specified in Section 11.5, provided that such modification does not increase the costs to you, and you further agree that you waive any objection to such fee modification. The parties also agree that a good-faith challenge by either party to the fees imposed by NAM does not constitute a default, waiver, or breach of this Section 11.4 while such challenge remains pending before NAM, the arbitrator, and/or a court of competent jurisdiction, and that any and all due dates for those fees shall be tolled during the pendency of such challenge.
                    <br />
                    <br />
                    Any arbitration demand or counterclaim asserted by either party must contain sufficient information to provide fair notice to the other party of the asserting party’s identity, the claims being asserted, and the factual allegations on which they are based. The arbitrator and/or NAM may require amendment of any demand or counterclaim that does not satisfy these requirements. The arbitrator has the right to impose sanctions for any claims the arbitrator determines to be frivolous or improper (under the standard set forth in Federal Rule of Civil Procedure 11).
                    <br />
                    <br />
                    If the amount in controversy does not exceed $10,000 and you do not seek injunctive or declaratory relief, then the arbitration will be conducted solely on the basis of documents you and Quora submit to the arbitrator, unless the arbitrator determines that a hearing is necessary. If the amount in controversy exceeds $10,000 or seeks declaratory or injunctive relief, either party may request (or the arbitrator may determine) to hold a hearing, which shall be via videoconference or telephone conference unless the parties agree otherwise.
                    <br />
                    <br />
                    Subject to the applicable NAM rules and procedures, the parties agree that the arbitrator will have the discretion to allow the filing of dispositive motions if they are likely to efficiently resolve or narrow issues in dispute. Unless otherwise prohibited by law, all arbitration proceedings will be confidential and closed to the public and any parties other than you and Quora (and each of the parties’ authorized representatives and agents), and all records relating thereto will be permanently sealed, except as necessary to obtain court confirmation of the arbitration award (provided that the party seeking confirmation shall seek to file such records under seal to the extent permitted by law).
                </p>
                <p>
                    <b>11.5 Mass Filing Rules.</b>
                    To increase the efficiency of administration and resolution of arbitrations, in the event 50 or more similar arbitration demands (those asserting the same or substantially similar facts or claims, and seeking the same or substantially similar relief) presented by or with the assistance or coordination of the same law firm(s) or organization(s) are submitted to NAM (or another arbitration provider selected in accordance with Section 11.4 if NAM is unavailable) against Quora within reasonably close temporal proximity ("Mass Filing"), the parties agree (i) to administer the Mass Filing in batches of 50 demands per batch (to the extent there are fewer than 50 arbitration demands left over after the batching described above, a final batch will consist of the remaining demands) with only one batch filed, processed, and adjudicated at a time; (ii) to designate one arbitrator for each batch; (iii) to accept applicable fees, including any related fee reduction determined by NAM (or another arbitration provider selected in accordance with Section 11.4 if NAM is unavailable) in its discretion; (iv) that no other demands for arbitration that are part of the Mass Filing may be filed, processed, or adjudicated until the prior batch of 50 is filed, processed, and adjudicated; (v) that fees associated with a demand for arbitration included in a Mass Filing, including fees owed by Quora and the claimants, shall only be due after your demand for arbitration is included in a set of batch proceedings and that batch is properly designated for filing, processing, and adjudication; and (vi) that the staged process of batched proceedings, with each set including 50 demands, shall continue until each demand (including your demand) is adjudicated or otherwise resolved. Arbitrator selection for each batch shall be conducted to the greatest extent possible in accordance with the applicable NAM rules and procedures for such selection, and the arbitrator will determine the location where the proceedings will be conducted.
                    <br />
                    <br />
                    <b>
                        You agree to cooperate in good faith with Quora and the arbitration provider to implement such a “batch approach” or other similar approach to provide for an efficient resolution of claims, including the payment of combined reduced fees, set by NAM in its discretion, for each batch of claims.
                    </b>
                    <br />
                    <br />
                    The parties further agree to cooperate with each other and the arbitration provider or arbitrator to establish any other processes or procedures that the arbitration provider or arbitrator believe will provide for an efficient resolution of claims. Any disagreement between the parties as to whether this provision applies or as to the process or procedure for batching shall be resolved by a Procedural Arbitrator appointed by NAM, as defined by NAM’s Supplemental Rules. This "Batch Arbitration" provision shall in no way be interpreted as increasing the number of claims necessary to trigger the applicability of NAM’s Mass Filing Supplemental Dispute Resolution Rules and Procedures or authorizing class arbitration of any kind. Unless Quora otherwise consents in writing, Quora does not agree or consent to class arbitration, private attorney general arbitration, or arbitration involving joint or consolidated claims under any circumstances, except as set forth in section 11.6 and this section 11.5. If your demand for arbitration is included in the Mass Filing, your claims will remain tolled until your demand for arbitration is decided, withdrawn, or is settled.
                    <br />
                    <br />
                    The arbitrator will render an award within the time frame specified in the applicable NAM rules and procedures. The arbitrator's decision will include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction thereof. The arbitrator will have the authority to award monetary damages on an individual basis and to grant, on an individual basis, any non-monetary remedy or relief available to an individual to the extent available under applicable law, the arbitral forum's rules, and this Arbitration Agreement. The parties agree that the damages and/or other relief must be consistent with Section 11.6 and also must be consistent with the terms of the "Limitation of Liability" section of the Agreement as to the types and the amounts of damages or other relief for which a party may be held liable. No arbitration award or decision will have any preclusive effect as to issues or claims in any dispute with anyone who is not a named party to the arbitration. Attorneys' fees will be available to the prevailing party in the arbitration only if authorized under applicable substantive law governing the claims in the arbitration.
                </p>
                <p>
                    <b>11.6 Class Action and Class Arbitration Waiver.</b>
                    YOU AND QUORA ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT ALLOWED BY LAW, ANY ARBITRATION SHALL BE CONDUCTED IN AN INDIVIDUAL CAPACITY ONLY AND NOT AS A CLASS OR ANY OTHER TYPE OF CONSOLIDATED ACTION AND THE ARBITRATOR MAY AWARD RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO RESOLVE AN INDIVIDUAL PARTY’S CLAIM, UNLESS QUORA PROVIDES ITS CONSENT TO CONSOLIDATE IN WRITING.
                    <br />
                    <br />
                    If there is a final judicial determination that applicable law precludes enforcement of this Paragraph’s limitations as to a particular remedy, then that remedy (and only that remedy) must be severed from the arbitration and may be sought in court. The parties agree, however, that any adjudication of remedies not subject to arbitration shall be stayed pending the outcome of any arbitrable claims and remedies.
                    <br />
                    <br />
                    If there is a final judicial determination that either the Class Arbitration Action and Collective Relief Waiver or the provisions in Section 11.4 are not enforceable as to a particular claim or request for relief, then the parties agree that that particular claim or request for relief may proceed in court but shall be severed and stayed pending arbitration of the remaining claims. This provision does not prevent you or Quora from participating in a class-wide settlement of claims.
                </p>
                <p>
                    <b>11.7 Exception: Small Claims Court Claims.</b>
                    Notwithstanding the parties’ agreement to resolve all disputes through arbitration, either party may also elect to have disputes or claims resolved in a small claims court that are within the scope of that court’s jurisdiction regardless of what forum the filing party initially chose. Either party may also seek a declaratory judgment or other equitable relief in a court of competent jurisdiction regarding whether a party’s claims are time-barred or may be brought in small claims court. Seeking such relief shall not waive a party’s right to arbitration under this agreement, and any filed arbitrations related to any action filed pursuant to this paragraph shall automatically be stayed pending the outcome of such action.
                </p>
                <p>
                    <b>11.8 Exception: Intellectual Property and Content Claims.</b>
                    Notwithstanding the parties’ agreement to resolve all disputes through arbitration, this binding arbitration section does not apply to disputes relating to either party’s intellectual property rights (trademark, copyright, patent, and trade secret) or violations of Quora’s Acceptable Use Policy. For further clarification, disputes relating to your privacy rights are not excepted from this binding arbitration section.
                </p>
                <p>
                    <b>11.9 30 Day Right to Opt-Out.</b>
                    You have the right to opt-out and not be bound by the arbitration and class action waiver provisions set forth in Sections 11.4-11.6 by sending written notice of your decision to opt-out by emailing us at arbitration.optout@quora.com. The notice must be sent within thirty (30) days of registering to use the Quora Platform, otherwise you will be bound to arbitrate disputes in accordance with the terms of those sections. If you opt out of these arbitration provisions, we also will not be bound by them. Quora will continue to honor any valid opt outs if you opted out of arbitration in a prior version of the Agreement pursuant to the requirements set forth in that version. If you do not timely opt out of this Arbitration Agreement, such action shall constitute mutual acceptance of the terms of these “Dispute Resolution” provisions by you and Quora.
                </p>
                <p>
                    <b>11.10 Changes to this section.</b>
                    Quora will provide 30 days’ notice of any changes to this section. Changes will become effective on the 30th day and apply to all claims not yet filed. If you continue to use the site after the 30th day, you agree that any unfiled claims of which Quora does not have actual notice are subject to the revised clause.
                    <br />
                    <br />
                    If you reject any such changes by opting out of the Arbitration Agreement, you may exercise your right to a trial by jury or judge, as permitted by applicable law, but any prior existing agreement to arbitrate disputes under a prior version of the Arbitration Agreement will not apply to claims not yet filed. If Quora changes this "Dispute Resolution" section after the date you first accepted this Agreement (or accepted any subsequent changes to this Agreement), you agree that your continued use of the Product(s) or Services 30 days after such change will be deemed acceptance of those changes. If you do not agree to such change, you may opt out by providing notice as described in Section 11.9.
                </p>
                <p>
                    <b>11.11 Exclusive Venue for Litigation.</b>
                    If you are not a user in the European Economic Area, the United Kingdom, or Switzerland, to the extent that the arbitration provisions set forth in Section 11) do not apply, or if you have opted out of arbitration, the parties agree that any litigation between them must be filed exclusively in state or federal courts located in Santa Clara County, California (except for small claims court actions which may be brought in the county where you reside). These Terms shall be governed by the laws of the State of California, excluding its conflict of laws provision and the parties expressly consent to exclusive jurisdiction in Santa Clara County, California for any litigation other than small claims court actions. In the event of litigation relating to these Terms of Service, the parties agree to waive, to the maximum extent permitted by law, any right to a jury trial, except where a jury trial waiver is not permissible under applicable law.
                    <br />
                    <br />
                    If you are a user in the European Economic Area, the United Kingdom, or Switzerland, this section does not deprive you of any rights or protections you have under the law of the country of your residence or access to courts in that country.
                </p>


                <h6 className="mt-3">12. General Terms</h6>
                <p>
                    <b>12.1 Changes to these Terms of Service. </b>
                    Except for the Dispute Resolution Section of these Terms (Section 11), we may amend these Terms (including any policies, such as the Privacy Policy, Acceptable Use Policy, Copyright Policy, and Trademark Policy that are incorporated into these Terms) at any time, in our sole discretion. If we amend material terms to these Terms, such amendment will be effective after we send you notice of the amended agreement. Such notice will be in our sole discretion, and the manner of notification could include, for example, via email, posted notice on the Quora Platform, or other manner. You can view these Terms and our main policies at any time here. Your failure to cancel your account, or cease use of the Quora Platform, after receiving notification of the amendment, will constitute your acceptance of the amended terms. If you do not agree to the amendments or to any of the terms in these Terms, your only remedy is to cancel your account or to cease use of the Quora Platform.
                </p>
                <p>
                    <b>12.2 Export. </b>
                    The Quora Platform is controlled and operated from our United States offices in California. Quora software is subject to United States export controls and activities involving Quora software are subject to United States trade and economic sanctions laws and regulations (collectively, “US Trade Controls”). You may not export, reexport, transfer, or otherwise release any Quora software in violation of US Trade Controls, including: (1) to users located in countries or territories that are the target of comprehensive sanctions or designated by the U.S. government as a State Sponsor of Terrorism (collectively, “Sanctioned Countries”); (2) to users that are the subject of US Trade Controls prohibitions, including, without limitation: (i) parties designated on the US Department of the Treasury’s Office of Foreign Assets Control’s Specially Designated Nationals and Blocked Persons List or Sanctions Evaders List; (ii) parties owned 50% or more, individually or in the aggregate, by one or more of the foregoing; or (iii) parties designated on the US Department of Commerce’s Entity List ((i)-(iii) collectively, “Prohibited Parties”); or (3) otherwise in violation of US Trade Controls. You represent that you are not located in a Sanctioned Country or a Prohibited Person.
                </p>
                <p>
                    <b>12.3 Applications and Mobile Devices. </b>
                    If you access the Quora Platform through a Quora application, you acknowledge that these Terms are an agreement between you and Quora only, and not with another application service provider or application platform provider (such as Apple Inc. or Google Inc.), which may provide you the application subject to its own terms. To the extent you access the Quora Platform through a mobile device, your wireless carrier’s standard charges, data rates, and other fees may apply.
                </p>
                <p>
                    <b>12.4 Survival. </b>
                    The following provisions will survive expiration or termination of these Terms: 1.6 (Feedback), Section 3 (Your Content), Section 4.1-4.2 and 4.4-4.7(Our Content and Materials), Section 6 (Third-Party Links, Sites, and Services), Section 8 (Termination), Section 9 (Disclaimers and Limitation of Liability), Section 10 (Indemnification), Sections 11 (Legal Disputes and Arbitration Agreement), and Section 12 (General Terms).
                </p>
                <p>
                    <b>12.5 Notice for California Users. </b>
                    Under California Civil Code Section 1789.3, California web users are entitled to the following specific consumer rights notice: The Quora Platform is provided by Quora, Inc., located in Mountain View, California. If you have a question or complaint regarding the Quora Platform, please contact Quora at support@quora.com. California residents may reach the Department of Consumer Affairs Consumer Information Division at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (916) 445-1254 or (800) 952-5210 or Hearing Impaired at TDD (800) 326-2297 or TDD (916) 322-1700.
                </p>
                <p>
                    <b>12.6 Government End Users. </b>
                    Any Quora software and related documentation are “Commercial Items,” as that term is deﬁned at 48 C.F.R. §2.101, consisting of “Commercial Computer Software” and “Commercial Computer Software Documentation,” as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202 (as applicable). Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4 (as applicable), the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. government end users: (i) only as Commercial Items; and (ii) with only those rights as are granted to all other end users pursuant to these Terms.
                </p>
                <p>
                    <b>12.7 Assignment. </b>
                    These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Quora without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.
                </p>
                <p>
                    <b>12.8 Electronic Communications. </b>
                    You consent to receive communications from us by email in accordance with these Terms, our Privacy Policy and applicable law. You acknowledge and agree that all agreements, notices, disclosures and other communications that we provide to you electronically will satisfy any legal requirement that such communications be in writing.
                </p>
                <p>
                    <b>12.9 Entire Agreement/ Severability. </b>
                    These Terms constitute the entire agreement between you and us regarding the Quora Platform (except as to services that require separate written agreement with us, in addition to this agreement) and supersede all prior terms, agreements, discussions and writings regarding the Quora Platform. If any provision in these Terms is found to be unenforceable, then that provision will not affect the enforceability of the remaining provisions of these Terms, which will remain in full force and effect.
                </p>
                <p>
                    <b>12.10 Interpretation. </b>
                    In construing or interpreting the terms of this agreement: (i) the headings in this these Terms are for convenience only, and are not to be considered, and (ii) no presumption is to operate in either party’s favor as a result of its counsel’s role in drafting these Terms.
                </p>
                <p>
                    <b>12.11 Notices. </b>
                    All notices permitted or required under this agreement, unless specified otherwise in these Terms, must be sent in writing as follows in order to be valid: (i) if to you, by us via email to the address associated with your account, and (ii) if to us, by you via legal@quora.com. Notices will be deemed given (a) if to you, when emailed, and (b) if to us, on receipt by us.
                </p>
                <p>
                    <b>12.12 Relationship. </b>
                    This agreement between you and us does not create a joint venture, agency, partnership, or other form of joint enterprise between you and us. Except as expressly provided herein, neither party has the right, power, or authority to create any obligation or duty, express or implied, on behalf of the other.
                </p>
                <p>
                    <b>12.13 Waiver. </b>
                    No waiver of any terms will be deemed a further or continuing waiver of such term or any other term. Our failure to assert a right or provision under these Terms will not constitute a waiver of such right or provision.
                </p>
                <p>
                    <b>12.14 Contact. </b>
                    Feel free to contact us through quora.com/contact with any questions about these Terms. Quora is a Delaware corporation, located at 605 Castro Street, Mountain View, CA 94041.
                </p>
            </div>
        </div>
    );
}
