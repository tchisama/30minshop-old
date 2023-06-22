import { useData } from "@/store/useData";
import { Divider, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import SectionTopic from "./Components/SectionTopic";

const Navbar = () => {
  const { data, setData, selectedSection, setSelectedSection } = useData();
  const [logo, setLogo] = useState(true);
  return (
    <div className="text-gray-600">
      <div className="flex w-full mb-4 justify-between items-center">
        <h2 className="text-2xl p-2 font-medium">Navbar</h2>
        <IconButton onClick={() => setSelectedSection(null)}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />

      <div className="py-4 flex flex-col gap-2">
        <details className="collapse  collapse-arrow bg-base-100 border">
          <summary className="collapse-title text-lg font-medium">Logo</summary>
          <div className="collapse-content">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">logo</span>
                <input
                  onClick={() =>
                    setData(
                      data.map((s, i) =>
                        i == selectedSection
                          ? {
                              ...s,
                              props: {
                                ...s.props,
                                viewLogo: !s.props.viewLogo,
                              },
                            }
                          : s
                      )
                    )
                  }
                  checked={data[selectedSection || 0].props.viewLogo}
                  type="checkbox"
                  className="toggle toggle-primary"
                />
              </label>
              {data[selectedSection || 0].props.viewLogo && (
                <>
                  <input
                    value={data[selectedSection || 0].props?.logoUrl || ""}
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  logoUrl: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    type="text"
                    placeholder="Type here"
                    className="input my-1 input-bordered input-sm w-full max-w-xs"
                  />

                  <label className="flex flex-col items-start label">
                    <span className="label-text">size</span>
                    <input
                      value={data[selectedSection || 0].props?.logoSize || 0}
                      onInput={(e) =>
                        setData(
                          data.map((s, i) =>
                            i == selectedSection
                              ? {
                                  ...s,
                                  props: {
                                    ...s.props,
                                    logoSize: (e.target as any).value,
                                  },
                                }
                              : s
                          )
                        )
                      }
                      type="range"
                      min={10}
                      max={50}
                      className="range range-primary range-xs"
                      step="5"
                    />
                    <div className="w-full flex justify-between text-xs px-2 py-2 text-gray-400">
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                    </div>
                  </label>
                </>
              )}
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">logo name</span>
                <input
                  onClick={() =>
                    setData(
                      data.map((s, i) =>
                        i == selectedSection
                          ? {
                              ...s,
                              props: {
                                ...s.props,
                                viewLogoText: !s.props.viewLogoText,
                              },
                            }
                          : s
                      )
                    )
                  }
                  checked={data[selectedSection || 0].props.viewLogoText}
                  type="checkbox"
                  className="toggle toggle-primary"
                />
              </label>
              {data[selectedSection || 0].props.viewLogoText && (
                <div className="flex gap-2">
                  <input
                    value={data[selectedSection || 0].props?.logoText || ""}
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  logoText: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    type="text"
                    placeholder="Type here"
                    className="input my-1 input-bordered input-sm w-full max-w-xs"
                  />
                  <input
                    value={
                      data[selectedSection || 0].props?.logoTextColor || ""
                    }
                    onInput={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  logoTextColor: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                    type="color"
                    placeholder="Type here"
                    className="input my-1 px-0 w-16 input-bordered input-sm  max-w-xs"
                  />
                </div>
              )}
            </div>
          </div>
        </details>

        <details className="collapse collapse-arrow  bg-base-100 border">
          <summary className="collapse-title text-lg font-medium">
            Links
          </summary>
          <div className="collapse-content">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show links</span>
                <input
                  onClick={() =>
                    setData(
                      data.map((s, i) =>
                        i == selectedSection
                          ? {
                              ...s,
                              props: {
                                ...s.props,
                                viewLinks: !s.props.viewLinks,
                              },
                            }
                          : s
                      )
                    )
                  }
                  checked={data[selectedSection || 0].props?.viewLinks || false}
                  type="checkbox"
                  className="toggle toggle-primary"
                />
              </label>
              <div className="flex justify-between gap-2 items-center">
                <label className=" label">align</label>
                <select
                  value={data[selectedSection || 0].props?.linksAlign || "start"}
                    onChange={(e) =>
                      setData(
                        data.map((s, i) =>
                          i == selectedSection
                            ? {
                                ...s,
                                props: {
                                  ...s.props,
                                  linksAlign: (e.target as any).value,
                                },
                              }
                            : s
                        )
                      )
                    }
                  className="select select-bordered w-full select-sm max-w-xs"
                >
                  <option value={"start"}>start</option>
                  <option value={"center"}>center</option>
                  <option value={"end"}>end</option>
                </select>
              </div>
              <label className="label">order</label>
              <ul className="my-2 flex flex-col gap-1">
                {data[selectedSection || 0].props?.links.map((link: any) => (
                  <li className="p-2 px-4 rounded-md border flex justify-between items-center">
                    <span>{link.name}</span>
                    <div className="join flex items-center flex-1 justify-end">
                      <button className="btn btn-xs text-gray-500 join-item">
                        <KeyboardArrowDownRoundedIcon />
                      </button>
                      <button className="btn btn-xs text-gray-500 join-item">
                        <KeyboardArrowUpRoundedIcon />
                      </button>
                    </div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm ml-2 checkbox-primary"
                    />
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          </div>
        </details>

        <SectionTopic title="Search">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Show search</span>
              <input
                onClick={() =>
                  setData(
                    data.map((s, i) =>
                      i == selectedSection
                        ? {
                            ...s,
                            props: { ...s.props, search: !s.props.search },
                          }
                        : s
                    )
                  )
                }
                checked={data[selectedSection || 0].props.search}
                type="checkbox"
                className="toggle toggle-primary"
              />
            </label>
          </div>
        </SectionTopic>

        <details className="collapse collapse-arrow  bg-base-100 border">
          <summary className="collapse-title text-lg font-medium">Cart</summary>
          <div className="collapse-content">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show cart</span>
                <input
                  onClick={() =>
                    setData(
                      data.map((s, i) =>
                        i == selectedSection
                          ? {
                              ...s,
                              props: {
                                ...s.props,
                                viewCart: !s.props.viewCart,
                              },
                            }
                          : s
                      )
                    )
                  }
                  checked={data[selectedSection || 0].props.viewCart}
                  type="checkbox"
                  className="toggle toggle-primary"
                />
              </label>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
