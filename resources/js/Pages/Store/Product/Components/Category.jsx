import React, { useState } from "react";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

function Category({ store, categories, category, setCategory }) {
    const [show, setShow] = useState(false);

    const select = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    const { data, setData, errors, post } = useForm({
        name: "",
        description: "",
        store_id: store.id,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("category.store", store));
    };

    return (
        <div>
            <div className="grid gap-2">
                <section
                    className="cursor-pointer border-2 rounded-xl"
                    onClick={select}
                >
                    {category.length ? (
                        <span className="flex justify-center items-center gap-3 h-full w-full">
                            {category}
                        </span>
                    ) : (
                        <span className="flex justify-center items-center gap-3 h-full w-full">
                            Category
                        </span>
                    )}
                </section>
            </div>

            <Modal show={show} onClose={closeModal}>
                <div className="fle flex-col gap-5 h-[440px] p-3 scroll overflow-auto">
                    {categories.map((ct) => (
                        <span
                            key={ct.id}
                            className="flex w-full p-2 my-2 border-2 cursor-pointer"
                            onClick={(e) => {
                                setCategory("category", ct.name);
                                setShow(false);
                            }}
                        >
                            {ct.name}
                        </span>
                    ))}
                </div>

                <div className="p-2 border-t overflow-auto">
                    <form className="flex flex-col gap-2" onSubmit={submit}>
                        <div className="grid md:flex-col gap-2 w-full">
                            <input
                                type="text"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full py-3 px-5 border-l-8 border-as rounded outline-none"
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name}</p>
                            )}
                        </div>
                        <div className="grid md:flex justify-end">
                            <span
                                onClick={(e) =>
                                    post(route("category.store", store))
                                }
                                className="bg-as/20 text-black/90 py-3 px-5 border-l-8 border-as cursor-pointer rounded"
                            >
                                Submit
                            </span>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Category;