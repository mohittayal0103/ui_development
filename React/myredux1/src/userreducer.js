// import userEvent from "@testing-library/user-event";

    const Userlist = (state=[], action) => {
        let data = Object.assign([], state);

        if(action.type === "adduser"){
            data.push(action.fullname);
        }

        if(action.type === "deluser"){
            data.splice(action.userindex, 1);
        }

        return data;
    }

    export default Userlist;