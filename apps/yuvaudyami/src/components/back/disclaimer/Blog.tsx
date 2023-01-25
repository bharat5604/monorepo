import React from "react";
import { Section } from "../../Layout";
type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="">
          <div>
            <p className="text-center text-light py-6">Last updated: December 26, 2022</p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-justify text-primary flex flex-col space-y-4">
              <p>
                If you require any more information or have any questions about our site disclaimer,
                please feel free to contact us by email at admin@Yuva udyami swarojgar.org
                support@yuvaudhyemi.org
              </p>
              <p>
                All the information on this website - https://www.Yuvaudyamiswarojgar.org/ - is
                published in good faith and for general information purposes only. Yuva udyami
                swarojgar does not make any warranties about the completeness, reliability, and
                accuracy of this information. Any action you take upon the information you find on
                this website (Yuva udyami swarojgar), is strictly at your own risk. Yuva udyami
                swarojgar will not be liable for any losses and/or damages in connection with the
                use of our website.
              </p>
              <p>
                From our website, you can visit other websites by following hyperlinks to such
                external sites. While we strive to provide only quality links to useful and ethical
                websites, we have no control over the content and nature of these sites. These links
                to other websites do not imply a recommendation for all the content found on these
                sites. Site owners and content may change without notice and may occur before we
                have the opportunity to remove a link that may have gone bad
              </p>
              <p>
                Please be also aware that when you leave our website, other sites may have different
                privacy policies and terms that are beyond our control. Please be sure to check the
                Privacy Policies of these sites as well as their Terms of Service before engaging in
                any business or uploading any information.
              </p>
            </div>

            <div className="text-justify text-primary flex flex-col space-y-4">
              <p className="text-xl md:text-3xl text-dark font-semibold">Line of Business</p>
              <p>1. Yuva udyami swarojgar Invites online application form</p>
              <p>2.Form fill online mode only</p>
              <p>
                3.Membership/application fee Rs. 3500/- (For Gen, OBC, and Other Category) and Rs.
                270/- (For SC/ST/PH) (registration fee is non-refundable in any case)
              </p>
              <p>4. Payment related query mail - admin@yuvc.org, support@yuvaudhyemi.org</p>
              <p>5. For registration visit on website https://www.Yuvaudyamiswarojgar.org</p>
              <p>
                6. If online payment failure amount will refund in your bank account within 7-10
                working days.
              </p>
              <p>7. Registration Fee pay Via UPI Net Banking, Credit Card, Debit Card etc.</p>
            </div>

            <div className="text-justify text-primary flex flex-col space-y-4">
              <p className="text-xl md:text-3xl text-dark font-semibold">Consent</p>
              <p>
                By using our website, you hereby consent to our disclaimer and agree to its terms.
              </p>
            </div>

            <div className="text-justify text-primary flex flex-col space-y-4">
              <p className="text-xl md:text-3xl text-dark font-semibold">Update</p>
              <p>
                Should we update, amend or make any changes to this document, those changes will be
                prominently posted here.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
