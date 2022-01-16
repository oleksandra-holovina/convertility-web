import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import {withUser} from '../../api/auth';

const FormItem = ({label, htmlFor, children}) => (
    <div className="flex flex-col space-y-2 w-full">
        <label htmlFor={htmlFor}>{label}:</label>
        {children}
    </div>
);

export const getServerSideProps = async (context) => withUser(context);

const NewListing = ({profileUrl}) => {
    const handleCreate = async (e) => {
        e.preventDefault();

        const {title, description, technology, acceptanceCriteria, priceForDay, decreasePercentage} = e.target.elements;
        try { //todo: make sure authenticated
            await axios.post('http://localhost:8080/api/v1/job-listings', {
                title: title.value,
                description: description.value,
                techStack: technology.value.split('\n'),
                acceptanceCriteria: acceptanceCriteria.value.split('\n'),
                priceForDay: priceForDay.value,
                decreasePercentage: decreasePercentage.value
            });
        } catch (e) {
            //todo: handle
        }
    }
    return (
        <div>
            <div className="max-w-screen-lg m-auto">
                <Header activeId={3} profileUrl={profileUrl}/>
                <div className="mt-48">
                    <h1 className="text-4xl font-bold">Create New <span
                        className="text-blue-500">Project</span></h1>

                    <form className="mt-10" onSubmit={handleCreate}>
                        <div className="flex space-x-10">
                            <div className="w-full space-y-5">
                                <FormItem label="Title" htmlFor="title">
                                    <input
                                        className="py-1 px-3 shadow-md rounded-sm"
                                        id="title" name="title"
                                        placeholder="Need a website developer for my cat website" />
                                </FormItem>
                                <select multiple className="w-full" name="technology">
                                    <option disabled selected>Select
                                        technologies
                                    </option>
                                    <option value="java">Java</option>
                                    <option value="javaScript">JavaScript</option>
                                    <option value="aws">AWS</option>
                                    <option value="terraform">Terraform</option>
                                </select>
                                <div className="flex space-x-5">
                                    <FormItem label="Pay if done in 1 day"
                                              htmlFor="priceForDay">
                                        <input
                                            className="py-1 px-3 shadow-md rounded-sm"
                                            id="priceForDay" name="priceForDay"
                                            placeholder="$5,000" />
                                    </FormItem>
                                    <FormItem label="Extra day decrease">
                                        <input
                                            className="py-1 px-3 shadow-md rounded-sm"
                                            id="decreasePercentage"
                                            name="decreasePercentage"
                                            placeholder="5%" />
                                    </FormItem>
                                </div>
                                <div
                                    className="border border-gray-300 p-6 rounded-sm text-center cursor-pointer"
                                    onClick={() => document.getElementById('file').click()}>
                                    <input type="file" id="file"
                                           className="hidden"
                                           multiple />
                                    <span className="text-gray-400">Upload additional resources (mockups, diagrams)...</span>
                                </div>
                            </div>
                            <div className="w-full space-y-5">
                                <FormItem label="Description"
                                          htmlFor="description">
                             <textarea
                                 className="py-1 px-3 shadow-md rounded-sm resize-none h-32"
                                 id="description" name="description"
                                 placeholder="A website for displaying cat pictures..." />
                                </FormItem>
                                <FormItem label="Acceptance criteria"
                                          htmlFor="acceptanceCriteria">
                             <textarea
                                 className="py-1 px-3 shadow-md rounded-sm resize-none h-32"
                                 id="acceptanceCriteria" name="acceptanceCriteria"
                                 placeholder="- I can see a list of cat pictures and info about cats
- I am able to upload a new picture
- I can modify cat information" />
                                </FormItem>
                            </div>
                        </div>
                        <div className="mt-10 w-1/6 mx-auto px-9 py-2 rounded-sm text-center cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500">
                            <button type="submit" className="font-bold text-lg text-white">Create</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
};

export default NewListing;
