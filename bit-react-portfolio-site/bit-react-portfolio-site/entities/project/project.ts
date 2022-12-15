import { ProjectKind, ProjectType } from "./project.type";

export class Project {
  private _id: string;
  private _name: string;
  private _description: string;
  private _tags: string[];
  private _image: string;
  private _type: ProjectKind;
  private _links: { [key: string]: string }

  constructor(project: ProjectType) {
    this._id = project.id;
    this._name = project.name;
    this._description = project.description;
    this._tags = project.tags;
    this._image = project.image;
    this._type = project.type;
    this._links = project.links;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get tags() {
    return this._tags;
  }

  get image() {
    return this._image;
  }

  get type() {
    return this._type;
  }

  get links() {
    return this._links;
  }
}