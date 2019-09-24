export default {
    "type": "document",
    "name": "social",
    "title": "Social Links",
    "fields": [
        {
            "type": "array",
            "name": "links",
            "title": "Social Links",
            "description": "A list of social links displayed on the left side.",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "type",
                            "title": "Type",
                            "hidden": true,
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome icon class name.",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": Rule => Rule.required()
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Social Links File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/social.json"
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