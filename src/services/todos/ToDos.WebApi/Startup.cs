using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

using ToDos.Model;
using ToDos.Persistence;

using Npgsql.EntityFrameworkCore;

using Swashbuckle.AspNetCore.Swagger;

#pragma warning disable 1591

namespace ToDos.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services) {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddEntityFrameworkNpgsql();
            services.AddDbContext<ToDoContext>(options => options.UseNpgsql(Configuration["ConnectionString"]));

            services.AddSwaggerGen(c => {
                c.SwaggerDoc(
                    "v1",
                    new Info {
                        Title = "ToDos.WebApi",
                        Version = "v1",
                        Description = "ToDos Wep API",
                        Contact = new Contact { Name = "Epos GmbH", Url = "https://github.com/eposgmbh/" }
                    }
                );

                c.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, "ToDos.WebApi.xml"));
            });

            services.AddScoped<IToDoRepository, ToDoRepository>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            using (var theServiceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope()) {
                var theToDoContext = theServiceScope.ServiceProvider.GetService<ToDoContext>();
                theToDoContext.Database.Migrate();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDos.WebApi V1"));

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
