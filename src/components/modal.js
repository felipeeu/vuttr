import React from 'react';
import { useFormik } from 'formik';
import styled from "styled-components";


const InputModal = styled.input`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 20px;
`;
const InputArea = styled.textarea`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 20px;
`;

const Wrapper = styled.section`
    display:flex ;
    flex-direction: column;
`;


const AddToolForm = () => {
  const formik = useFormik({
    initialValues: {
      toolName: '',
      toolLink: '',
      toolDescription: '',
      tags: []
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
      <h3>Add new Tool</h3>
      <label htmlFor="toolName">Tool Name</label>
      <InputModal
        id="toolName"
        name="toolName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.toolName}
      />
      <label htmlFor="toolLink">ToolLink</label>
      <InputModal
        id="toolLink"
        name="toolLink"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.toolLink}
      />
      <label htmlFor="toolDescription">Tool Description</label>
      <InputArea
        id="toolDescription"
        name="toolDescription"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.toolDescription}
      />
      <label htmlFor="tags">Tags</label>
      <InputModal
        id="tags"
        name="tags"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.tags}
      />
      <button type="submit">Submit</button>
      </Wrapper>
    </form>
    
  );
};

export default AddToolForm