import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { useState } from "react";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const [content, setContent] = useState("");
  const { handleSubmit, control } = useForm();
  const handleAddNewCampaign = (values) => {};
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="inline-block py-4 mb-10 text-2xl font-bold bg-opacity-20 px-14 bg-text4 rounded-xl">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label className="text-start">Campaign Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-start">Select a category *</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label className="text-start">Short Description *</Label>
            <Textarea
              name="short_description"
              placeholder="Write a short description..."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label className="text-start">Story *</Label>
            <ReactQuill
              placeholder="Write your story..."
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            ></ReactQuill>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
