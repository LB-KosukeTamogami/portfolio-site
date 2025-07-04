import ProjectForm from '../ProjectForm'

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">New Project</h1>
      
      <div className="bg-youtube-gray rounded-lg p-6">
        <ProjectForm />
      </div>
    </div>
  )
}