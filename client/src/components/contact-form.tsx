import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons sous 24h ouvrées.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Parlons de votre projet</h2>
          <p className="text-xl text-muted-foreground">
            Contactez-nous pour un audit gratuit et un devis personnalisé
          </p>
        </div>
        
        <div
          ref={formRef}
          className={`bg-card rounded-3xl p-8 lg:p-12 border border-border fade-in ${formVisible ? 'visible' : ''}`}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jean Dupont"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="jean@entreprise.fr"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service souhaité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Sélectionner un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="website">Création de site</SelectItem>
                          <SelectItem value="seo">Référencement SEO</SelectItem>
                          <SelectItem value="gso">GSO - Recherche IA</SelectItem>
                          <SelectItem value="ads">Google Ads</SelectItem>
                          <SelectItem value="all">Tout l'écosystème</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Décrivez votre projet..."
                        rows={5}
                        {...field}
                        data-testid="textarea-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-submit"
              >
                Envoyer ma demande
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Réponse sous 24h ouvrées • Audit gratuit • Devis personnalisé
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
