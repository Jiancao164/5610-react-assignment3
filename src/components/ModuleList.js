import React from 'react'

const ModuleList = ({modules}) =>
    <div className="list-group" id="list-tab" role="tablist">
            {
                modules.map(module =>
                    <ul key={module.id}>
                        <a key={module.id} className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list"
                           href="#" role="tab" aria-controls="home">{module.title}</a>
                    </ul>)
            }
    </div>


export default ModuleList