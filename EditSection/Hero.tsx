import { useData } from '@/store/useData'
import { Divider, IconButton, Switch } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SectionTopic from './Components/SectionTopic';

const Hero = () => {
  const {data,setData,selectedSection,setSelectedSection}=useData()
  return (
    <div className='text-gray-600'>
        <div className='flex w-full mb-4  justify-between items-center'>
            <h2 className='text-2xl p-2 font-medium'>Hero Section</h2>
            <IconButton onClick={()=>setSelectedSection(null)}><CloseIcon/></IconButton>
        </div>

        <Divider/>

        <div className='py-4 flex gap-2 flex-col'>
        

        
                <SectionTopic title="Header">
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <span className="label-text">header</span>
                    <input
                        onClick={() =>
                        setData(
                            data.map((s, i) =>
                            i == selectedSection
                                ? {
                                    ...s,
                                    props: { ...s.props, h1: !s.props.h1 },
                                }
                                : s
                            )
                        )
                        }
                        checked={data[selectedSection || 0].props.h1}
                        type="checkbox"
                        className="toggle toggle-primary"
                    />
                    </label>
                </div>
                {
                data[selectedSection || 0].props.h1 &&
                <>
                  <textarea
                    value={data[selectedSection || 0].props?.h1Text || ""}
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  h1Text: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    placeholder="Type here"
                    className="textarea my-1 textarea-bordered textarea-sm h-20 w-full "
                  />
                </>
                }
                </SectionTopic>





                <SectionTopic title="Sub Header">
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <span className="label-text">sub header</span>
                    <input
                        onClick={() =>
                        setData(
                            data.map((s, i) =>
                            i == selectedSection
                                ? {
                                    ...s,
                                    props: { ...s.props, h3: !s.props.h3 },
                                }
                                : s
                            )
                        )
                        }
                        checked={data[selectedSection || 0].props.h3}
                        type="checkbox"
                        className="toggle toggle-primary"
                    />
                    </label>
                </div>
                {
                data[selectedSection || 0].props.h3 &&
                <>
                  <textarea
                    value={data[selectedSection || 0].props?.h3Text || ""}
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  h3Text: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    placeholder="Type here"
                    className="textarea my-1 textarea-bordered textarea-sm h-20 w-full "
                  />
                </>
                }
                </SectionTopic>



                <SectionTopic title="Image ">
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <span className="label-text">image</span>
                    <input
                        onClick={() =>
                        setData(
                            data.map((s, i) =>
                            i == selectedSection
                                ? {
                                    ...s,
                                    props: { ...s.props, image: !s.props.image },
                                }
                                : s
                            )
                        )
                        }
                        checked={data[selectedSection || 0].props.image}
                        type="checkbox"
                        className="toggle toggle-primary"
                    />
                    </label>
                </div>
                {
                data[selectedSection || 0].props.image &&
                <>
                  <input
                    value={data[selectedSection || 0].props?.imageUrl || ""}
                    type="text"
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  imageUrl: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    placeholder="Type here"
                    className="input my-1 input-bordered input-sm  w-full "
                  />
                </>
                }
                </SectionTopic>


                <SectionTopic title="Action Button">
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <span className="label-text">Call action</span>
                    <input
                        onClick={() =>
                        setData(
                            data.map((s, i) =>
                            i == selectedSection
                                ? {
                                    ...s,
                                    props: { ...s.props, btn: !s.props.btn },
                                }
                                : s
                            )
                        )
                        }
                        checked={data[selectedSection || 0].props.btn}
                        type="checkbox"
                        className="toggle toggle-primary"
                    />
                    </label>
                </div>
                {
                data[selectedSection || 0].props.btn &&
                <>
                  <input
                    value={data[selectedSection || 0].props?.btnText || ""}
                    type="text"
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  btnText: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    placeholder="Type here"
                    className="input my-1 input-bordered input-sm  w-full "
                  />
                </>
                }
                </SectionTopic>




                <SectionTopic title="General">
                <div className="form-control">
                    <label className="label flex flex-col items-start gap-1 cursor-pointer">
                    <span className="label-text">height</span>
                    <input

                    value={data[selectedSection || 0].props?.height || ""}
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  height: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                       type="range"
                       min="10"
                       max="100"
                        className="range range-sm range-primary"
                    />
                    </label>


            <label className="label flex justify-between cursor-pointer">
              <span className="label-text">Background color</span>
              <input
                  value={data[selectedSection || 0].props?.backgroundColor || ""}
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  backgroundColor: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                type="color"
                className="input my-1 input-bordered input-sm px-0 max-w-xs"
              />
            </label>



                </div>
                </SectionTopic>





        </div>

    </div>
  )
}

export default Hero