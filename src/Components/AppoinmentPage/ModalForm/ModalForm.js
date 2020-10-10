import React from 'react';
import Modal from 'react-bootstrap4-modal'
import { useForm } from "react-hook-form"

const ModalForm = ({ modalState, setModalState, bookingTitle}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        setModalState(false)
    }
    return (
        <Modal className ='' visible={modalState} onClickBackdrop={() => setModalState(false)}>
                    <h3 className="textColor1  text-center mt-3">{bookingTitle}</h3>
            <div className="modal-body px-4">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">* Required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">* Required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">* Required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">* Required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">* Required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">* Required</span>}
                        </div>
                    </div>
                        <button type="submit" className="btn bgGradient d-block mx-auto px-4 mt-3 mb-2">Submit Data</button>
                </form>
            </div>
        </Modal>
    );
};

export default ModalForm;

