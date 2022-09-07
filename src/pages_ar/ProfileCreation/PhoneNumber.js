import React from "react";
import { InputField } from "../../components_ar/ProfileCreation/FormFields";
import { styles } from '../../Shared/styles';

export default function PhoneNumber(props) {
  const {
    formField: { phone },
  } = props;


  return (
    <>
      <p className="card__subtitle">أضف رقم هاتفك</p>
      <InputField
        name={phone.name}
        type="text"
        fullWidth
        dir="ltr"
        style={styles.textField}
      />
      <p className="card__subtitle">
        ستتم مشاركة رقم هاتفك مع العملاء
      </p>
    </>
  );
}