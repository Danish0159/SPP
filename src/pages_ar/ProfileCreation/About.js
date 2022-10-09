import React from "react";
import { InputField } from "../../components_ar/ProfileCreation/FormFields";
import { styles } from "../../Shared/Styles";

export default function About({ control }) {

  console.log("about");

  return (
    <div>
      <p className="card__subtitle">اسم الشركة :</p>
      <InputField name="name" control={control} type="text" limit={50} multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">عنوان الشركة :</p>
      <InputField name="address" control={control} type="text" multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">سنة تأسيس الشركة :</p>
      <InputField name="establishmentYear" control={control} type="text" limit={4} pattern={/^[0-9]*$/} min={0} minLength={4} style={styles.textField} />
      <p className="card__subtitle">رقم تسجيل الشركة :</p>
      <InputField name="registrationNumber" control={control} type="text" multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">رؤية الشركة :</p>
      <InputField name="vision" control={control} type="text" limit={200} multiline={true} rows={3} style={styles.desciption} />
      <p className="card__subtitle">أعلى قيمة نقدية تأخذها الشركة في المشروع :</p>
      <InputField name="highestMonetaryValue" control={control} type="text" multiline={true} rows={1} style={styles.desciption} />
    </div>
  );
}
