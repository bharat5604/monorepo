import React from "react";
import { Section } from "../Layout";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div>
      <Section>
        <div className="text-3xl text-center py-10 font-semibold">
          <p>3 Simple steps to Go</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-dark text-white p-4 rounded-lg">
            <p className="text-center text-2xl font-bold">Apply</p>
            <ol className="list-decimal list-inside mt-4 space-y-3">
              <li> प्रत्येक जिला स्तर और ब्लॉक स्तर पर आवेदन मंगाए हैं</li>
              <li>
                इच्छुक उम्मीदवार वेबसाइट के होम पेज पर Apply Now पे क्लिक करके
                उपलब्ध नौकरी के लिए आवेदन करे
              </li>
              <li>आपको Email पर User id और Password मिल जाएगा।</li>
              <li>उसके बाद उम्मीदवार फॉर्म को अपनी योग्यता के अनुसार भरें ।</li>
              <li>उसके बाद आप फॉर्म में अपनी सारी जानकारी भर सकते हैं</li>
              <li>आप अपने भुगतान विकल्प को चुने और भुगतान करें</li>
              <li>
                उसके बाद आपके Email id पर Registration Confirmation का मेल आएगा
                ।
              </li>
              <li>
                भविष्य में आप अपने ईमेल id या आवेदन id के माध्यम से लॉग इन कर
                सकते हैं ।
              </li>
            </ol>
          </div>
          <div className="bg-dark text-white p-4 rounded-lg">
            <p className="text-center text-2xl font-bold">Exam-Result</p>
            <ol className="list-decimal list-inside mt-4 space-y-3">
              <li>आवेदन करने के बाद आपको रेगुलर वेबसाइट चेक करते रहना है ।</li>
              <li>
                आवेदन करने के वक़्त आप एडमिट कार्ड डाउनलोड करने का समय देख लें ।
              </li>
              <li>तय समय सीमा में आप वेबसाइट से एडमिट कार्ड डाउनलोड करें ।</li>
              <li>और एग्जाम/असेसमेंट के तारीख को ध्यान रखें ।</li>
              <li>
                परीक्षा / असेसमेंट ऑनलाइन मोड में ली जाएगी या एग्जाम सेण्टर आपके
                डिस्ट्रिक्ट में होगा ।
              </li>
              <li>
                परीक्षा/ असेसमेंट के 1 महीने में ऑनलाइन रिजल्ट्स चेक करें ।
              </li>
            </ol>
          </div>
          <div className="bg-dark text-white p-4 rounded-lg">
            <p className="text-center text-2xl font-bold">Training</p>
            <ol className="list-decimal list-inside mt-4 space-y-3">
              <li>
                सफल कैंडिडेट की जॉब से सम्बंधित ट्रेनिंग के साथ साथ
                Employability Skill Development, Personality Development,
                Communication Skill Development प्रारंभ की जायेगी ।
              </li>
              <li>डोमेन ट्रेनिंग में उसके जॉब से सम्बंधित ट्रेनिंग होगी ।</li>
              <li>
                ट्रेनिंग प्रोग्राम online/Offline दोनों मोड में दी जाएगी ।
              </li>
              <li>
                उसके बाद सभी सफल प्रशिक्षणार्थियों को कार्य स्थल पर कार्यरत किया
                जाएगा ।{" "}
              </li>
            </ol>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
