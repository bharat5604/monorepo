import React from "react";
import { Section } from "../../Layout";
type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="py-10 ">
      <Section>
        <div className="flex flex-col space-y-4 ">
          <div>
            <p className="text-center text-light py-6">Last updated: December 26, 2022</p>
          </div>

          <div className="text-justify text-primary flex flex-col space-y-4">
            <p>Thank you for shopping at Yuva udyami swarojgar.</p>
            <p>
              If, for any reason, You are not completely satisfied with a purchase We invite You to
              review our policy on refunds and returns. This Return and Refund Policy has been
              created with the help of the TermsFeed Return and Refund Policy Generator.
            </p>
            <p>The following terms are applicable for any products that You purchased with Us.</p>
          </div>

          <div className="flex flex-col text-justify space-y-2 text-primary">
            <p className="text-xl md:text-3xl font-bold text-dark">
              Interpretation and Definitions
            </p>
            <p className="text-dark text-lg md:text-xl">Interpretation</p>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </p>
            <p className="text-dark text-lg md:text-xl">Definitions</p>
            <p>For the purposes of this Return and Refund Policy:</p>
            <ul className="flex flex-col gap-2 px-4">
              <li>
                1. <span className="font-bold">Servies</span> (referred to as either the Company,
                We, Us or Our in this Agreement) refers to Yuva udyami swarojgar., 
                {/* Garden, VikashPuri, New Janakpuri West Metro New delhi. */}
              </li>
              <li>
                2. <span className="font-bold">Services</span> refer to the items offered for sale
                on the Service.
              </li>
              <li>
                3. <span className="font-bold">Orders</span> mean a request by You to purchase
                Servies from Us.
              </li>
              <li>
                4. <span className="font-bold">Service</span> refers to the Website.
              </li>
              <li>
                5. <span className="font-bold"> Website.</span> refers to Yuva udyami swarojgar
                accessible from https://www.Yuvaudyamiswarojgar.org/
              </li>

              <li>
                6. <span className="font-bold"> You</span> means the individual accessing or using
                the Service, or the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </li>
            </ul>
          </div>

          <div className="flex flex-col text-justify space-y-2 text-primary">
            <p className="text-xl md:text-3xl font-bold text-dark">
              Your Order Cancellation Rights
            </p>
            <p>
              You are entitled to cancel Your Order within 14 days without giving any reason for
              doing so.
            </p>
            <p>
              The deadline for cancelling an Order is 14 days from the date on which You received
              the Servies or on which a third party you have appointed, who is not the carrier,
              takes possession of the product delivered.
            </p>
            <p>
              In order to exercise Your right of cancellation, You must inform Us of your decision
              by means of a clear statement. You can inform us of your decision by:
            </p>
            <ul className="flex flex-col gap-2 px-4">
              <li>1. By email: support@yuvaudhyemi.org</li>
              <li>2. By phone number: +91 123 456 7894, 011 123 456 7896</li>
            </ul>
            <p>
              We will reimburse You no later than 14 days from the day on which We receive the
              returned Servies. We will use the same means of payment as You used for the Order, and
              You will not incur any fees for such reimbursement.
            </p>
          </div>

          <div className="flex flex-col text-justify space-y-2 text-primary">
            <p className="text-xl md:text-3xl font-bold text-dark">Conditions for Returns</p>
            <p>In order for the Servies to be eligible for a return, please make sure that:</p>
            <ul className="flex flex-col gap-2 px-4">
              <li>1. The Servies were purchased in the last 14 days</li>
              <li>2. The Servies are in the original packaging</li>
            </ul>
            <p>
              We will reimburse You no later than 14 days from the day on which We receive the
              returned Servies. We will use the same means of payment as You used for the Order, and
              You will not incur any fees for such reimbursement.
            </p>
            <ul className="flex flex-col gap-2 px-4">
              <li>1. The Servies were purchased in the last 14 days</li>
              <li>2. The Servies are in the original packaging</li>
            </ul>
            <p>The following Servies cannot be returned:</p>

            <ul className="flex flex-col gap-2 px-4">
              <li>1. The supply of Servies made to Your specifications or clearly personalized.</li>
              <li>
                2. The supply of Servies which according to their nature are not suitable to be
                returned, deteriorate rapidly or where the date of expiry is over.
              </li>
              <li>
                3. The supply of Servies which are not suitable for return due to health protection
                or hygiene reasons and were unsealed after delivery.
              </li>
              <li>
                4. The supply of Servies which are, after delivery, according to their nature,
                inseparably mixed with other items.
              </li>
            </ul>
            <p>
              We reserve the right to refuse returns of any merchandise that does not meet the above
              return conditions in our sole discretion.
            </p>
            <p>
              Only regular priced Servies may be refunded. Unfortunately, Servies on sale cannot be
              refunded. This exclusion may not apply to You if it is not permitted by applicable
              law.
            </p>
          </div>

          <div className="flex flex-col text-justify space-y-2 text-primary">
            <p className="text-xl md:text-3xl font-bold text-dark">Returning Servies</p>
            <p className="">
              You are responsible for the cost and risk of returning the Servies to Us. You should
              send the Servies at the following address:
            </p>
            {/* <p>B15, Shankar Garden, VikashPuri, New Janakpuri West Metro New delhi</p> */}
            <p className="">
              We cannot be held responsible for Servies damaged or lost in return shipment.
              Therefore, We recommend an insured and trackable mail service. We are unable to issue
              a refund without actual receipt of the Servies or proof of received return delivery.
            </p>
          </div>

          <div className="flex flex-col text-justify space-y-2 text-primary">
            <p className="text-xl md:text-3xl font-bold text-dark">Gifts</p>
            <p className="">
              If the Servies were marked as a gift when purchased and then shipped directly to you,
              You will receive a gift credit for the value of your return. Once the returned product
              is received, a gift certificate will be mailed to You.
            </p>
            <p className="">
              If the Servies weren not marked as a gift when purchased, or the gift giver had the
              Order shipped to themselves to give it to You later, We will send the refund to the
              gift giver
            </p>
          </div>

          <div className="flex flex-col text-justify space-y-2 text-primary">
            <p className="text-xl md:text-3xl font-bold text-dark">Contact Us</p>
            <p>
              If you have any questions about our Returns and Refunds Policy, please contact us:
            </p>
            <ul className="flex flex-col gap-2 px-4">
              <li>1. By email: support@yuvaudhyemi.org</li>
              {/* <li>2. By phone number: +91 9599581858, 011 46579553</li> */}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
