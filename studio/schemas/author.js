export default {
    "type": "document",
    "name": "author",
    "title": "Author",
    "fields": [
        {
            "type": "string",
            "name": "name",
            "title": "Name",
            "validation": null
        },
        {
            "type": "string",
            "name": "email",
            "title": "Email",
            "validation": null
        },
        {
            "type": "image",
            "name": "avatar",
            "title": "Avatar",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Author File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/author.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}