import React, { useEffect, useState } from "react";
import { useFormik, ErrorMessage } from "formik";
import Tools from "../services/tools";
import styled from "styled-components";
import * as Yup from "yup";

const InputModal = styled.input.attrs({ placeholder: "Type here ..." })`
  background: #ebeaed 0% 0% no-repeat padding-box;
  border: 1px solid #dedce1;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 2.5em;
  width: inherit;
  text-align: left;
  font: Regular 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  opacity: 1;
`;
const InputArea = styled.textarea.attrs({
  placeholder: "Type description here ..."
})`
  background: #ebeaed 0% 0% no-repeat padding-box;
  border: 1px solid #dedce1;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 2.5em;
  width: inherit;
  text-align: left;
  font: Regular 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  opacity: 1;
  height: 10em;
`;

const Label = styled.label`
  padding-top: 20px;
  padding-bottom: 5px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 30em;
`;

const SubmitButton = styled.button`
  background: #365df0 0% 0% no-repeat padding-box;
  text-align: center;
  font: Semibold 30px/40px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  border-radius: 5px;
  width: 122px;
  height: 4em;
  opacity: 1;
  outline: none;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const Error = styled.span`
  padding-top: 3px;
  color: red;
  text-align: left;
  font-size: 12px;
  letter-spacing: 0.4px;
`;

const AddToolForm = ({ setToolData, toolData, setIsOpen }) => {
  const [targetValue, setTargetValue] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      description: "",
      tags:""
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      link: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      tags: Yup.string().required("Required")
    }),
    onSubmit: values => {
      if (formik.isValid) {
        const request = Tools.registerTool(values);
        request.then(response => {
          if (response.status === 201) {
            setToolData(toolData && toolData.concat([response.data]));
            setIsOpen(false);
          }
        });
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <h3>Add new Tool</h3>
        <Label htmlFor="title">Tool Name</Label>
        <InputModal
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <Error>{formik.errors.title}</Error>
        ) : null}

        <Label htmlFor="link">ToolLink</Label>
        <InputModal
          id="link"
          name="link"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.link}
        />
        {formik.touched.link && formik.errors.link ? (
          <Error>{formik.errors.link}</Error>
        ) : null}
        <Label htmlFor="description">Tool Description</Label>
        <InputArea
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <Error>{formik.errors.description}</Error>
        ) : null}
        <Label htmlFor="tags">Tags</Label>
        <InputModal
          id="tags"
          name="tags"
          type="text"
          onChange={({ target }) => {
            setTargetValue(target.value);
            const parsedValue = targetValue.split(" ");
            formik.setFieldValue("tags", parsedValue);
          }}
          value={targetValue}
        />
        {formik.touched.tags && formik.errors.tags ? (
          <Error>{formik.errors.tags}</Error>
        ) : null}
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Submit
        </SubmitButton>
      </Wrapper>
    </form>
  );
};

export default AddToolForm;
