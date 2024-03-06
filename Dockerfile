# Use a lightweight base image
FROM nginx:alpine

# Set metadata labels
LABEL maintainer="Tarun Sai <banditarunsai5566@gmail.com>"
LABEL description="Dockerfile for hosting a tarunsaidevops  website."

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the content of the local index.html, style.css, and script.js files into the container at the working directory
COPY index.html .
COPY style.css .
COPY script.js .

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]      # we explicitly start Nginx with the required options. This ensures better control over the container's behavior
