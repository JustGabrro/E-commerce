import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">აღწერა</div>
        <div className="descriptionbox-nav-box fade">მიმოხილვა (0)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        ი-კომერციის ვებსაიტი არის ონლაინ პლატფორმა, რომელიც ხელს უწყობს
          პროდუქციის ან მომსახურების ყიდვა-გაყიდვას ინტერნეტით.
         ვებსაიტი ემსახურება, როგორც ვირტუალურ ბაზარს, სადაც შეუძლიათ ბიზნესს და ინდივიდებს
          წარმოაჩინონ თავიანთი პროდუქცია, დაუკავშირდნენ მომხმარებლებს და განახორციელნონ
          ტრანზაქციები ონლაინ.
        </p>
        <p>
        ელექტრონული კომერციის ვებსაიტები, როგორც წესი, აჩვენს პროდუქტებს ან სერვისებს
          დეტალური აღწერილობებით, სურათებით, ფასებითა და ნებისმიერი ხელმისაწვდომი ვარიაციებით
          (მაგ. ზომები, ფერები). თითოეულ პროდუქტს აქვს საკუთარი გამოყოფილი გვერდი
          შესაბამისი ინფორმაციით.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
